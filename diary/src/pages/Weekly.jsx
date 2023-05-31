/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StickerDisplay from 'src/Components/StickerDisplay/StickerDisplay';
import WeeklyAxiosNetwork from 'src/network/weekly';
import DatepickerComponent from '../Components/DatepickerComponent/DatepickerComponentContainer';
import makeWeekly, { getlocWeek } from '../Utils/makeWeekly';
import {
  setIsWriten,
  setlocWeek, setSelectedWeek, setWeekly,
} from '../Redux/action';
import WEEKLY_CONST from '../Constants/weeklyConstant';
import WeeklyDisplayContainer from '../Components/Weekly/WeeklyDisplayContainer';
import NavBarContainer from '../Components/NavBar/NavBarContainer';
import SideBarContainer from '../Components/SideBar/SideBarContainer';
import WeeklyJumpButtonContainer from '../Components/WeeklyJumpButton/WeeklyJumpButtonContainer';
import useGetDateOffset from '../hooks/useGetDateOffset';

/**
 * 모든 날짜를 월요일로 나타내어 관리하기
 * @param {selectedDate} date datepicker에 쓰는 변수
 * @param {selectedDateInWeek} str store에 저장된 현재 날짜 정보 "0000-00-00"
 * @param {currentWeeklyPage, weeklyContents} object, 이 주의 날짜 정보
 * selectedDate가 바뀌면 dispatch함
 * [{"locdate":"", day:"", textContent:""},{}...]
 * @param {locThisWeek} str, 몇째주인지를 나타냄 ex."2023-03-W3"
 * @component <DatepickerComponent/> selectedDate를 달력의 해당 날짜로 바꿈
 */

const WeeklyPage = () => {
  const { selectedDateInWeek } = useSelector((state) => state.weeklyReducer);
  // datepicker에 필요한 변수 설정
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const yearInMonth = selectedDate.getFullYear();
  const dispatch = useDispatch();
  const currentWeeklyPage = makeWeekly(selectedDateInWeek);
  const locThisWeek = getlocWeek(selectedDateInWeek);
  const mondayInWeek = currentWeeklyPage.find((findDate) => findDate.day === 'Mon').locdate;
  const currWeeklyContents = useSelector(
    ({ weeklyReducer }) => weeklyReducer.weeklyContents[WEEKLY_CONST.NUM_OF_WEEK(locThisWeek)],
  );
  // 최초 렌더링=> 현재 date 정보 전달 (월요일로 변환 & str로 전달)
  useEffect(() => {
    dispatch(setlocWeek(locThisWeek));
  });
  // 현재 날짜가 바뀌면 해당 날짜의 페이지 정보 띄우기
  useEffect(() => {
    dispatch(setWeekly({ currentWeeklyPage, locWeek: locThisWeek }));
  }, [dispatch, selectedDateInWeek]);
  const offsetDate = useGetDateOffset(selectedDate);
  // datepicker로 인한 날짜 변경 시, selectedDateInWeek를 선택한 date로 변경 (offset+str 변환)
  useEffect(() => {
    dispatch(setSelectedWeek(offsetDate));
  }, [dispatch, selectedDate]);

  useEffect(() => {
    WeeklyAxiosNetwork.Read(locThisWeek).then((res) => {
      res.result.map(({ number_of_week, content }) => {
        dispatch(setIsWriten({
          content,
          idx: number_of_week,
          isWriten: true,
          locThisWeek,
        }));
      });
    });
  }, []);
  const weeklyHighlight = useSelector(
    (state) => state.weeklyReducer.weeklyContents,
  );
  const weeklyHighlightArr = Object.keys(weeklyHighlight)
    .filter((key) => key !== 'currlocWeek')
    .map((item) => new Date(weeklyHighlight[item][1].locdate));

  return (
    <>
      <NavBarContainer yearInMonth={yearInMonth} />
      <StickerDisplay pageDate={mondayInWeek} />
      <div className="h-full w-full bg-[#9DBC9D] text-center p-10">

        <div className="bg-white w-fit h-fit border my-10 mx-auto shadow-lg rounded">
          <div className="text-2xl font-bold text-left ml-5 flex flex-row">
            <span className="text-black border-4 rounded-full p-2 bg-white">
              {WEEKLY_CONST.LOGO}

            </span>
            <DatepickerComponent
              isWeekly
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              highlightDatesArr={weeklyHighlightArr}
              inputStyle="text-green-900  p-2"
            />
          </div>
          <WeeklyJumpButtonContainer locThisWeek={locThisWeek} />
          <div className="m-3 mx-5 grid grid-cols-4">
            {currWeeklyContents
              && currWeeklyContents.map((day, i) => (
                <WeeklyDisplayContainer
                  key={day.id}
                  idx={i}
                  day={day}
                />
              ))}
          </div>
        </div>
      </div>
      <SideBarContainer pageDate={mondayInWeek} />
    </>
  );
};

export default WeeklyPage;
