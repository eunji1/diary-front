/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DAILY_CONST } from 'src/Constants/dailyConstant';
import { setDailyIsWriten, setEditor } from '../../Redux/action';
import useGetEditor from '../../Utils/useGetEditor';
import TiptapPresenter from './TiptapPresenter';
/**
 *
 * @param {currentDate} date 현재 날짜
 * @param {Daily} obj 현재 페이지 정보
 * "D-currentDate":{day: "Fri",editorContent: "",locdate: "2023-03-24",titleText: ""}
 * @param {editor} 에디터 설정값들
 * @returns
 */

const TiptapContainer = () => {
  const dispatch = useDispatch();
  const editor = useGetEditor();
  const [isEditable, setIsEditable] = useState(false);
  const [currentDate, dailyInfo] = useSelector(
    ({ dailyReducer: { dailyContents } }) => [
      dailyContents.currentDate,
      dailyContents[DAILY_CONST.MARK(dailyContents.currentDate)],
    ],
  );

  const dailyContentsErase = () => {
    editor?.commands.setContent('');
    dispatch(setEditor({ locdate: currentDate, editorContent: '' }));
    dispatch(setDailyIsWriten({ isWriten: false }));
  };

  // 날짜가 바뀌면 editor content에 날짜에 맞는 content 불러오기
  useEffect(() => {
    editor?.off('update');
    if (editor && !editor.isDestroyed && dailyInfo?.isWriten) {
      editor?.commands.setContent(dailyInfo.editorContent);
    }
    editor?.on('update', () => {
      const html = editor.getHTML();
      if (html.length > 8 && html !== dailyInfo.editorContent) {
        dispatch(setEditor({ locdate: currentDate, editorContent: editor.getHTML() }));
        dispatch(setDailyIsWriten({ isWriten: false }));
      }
    });
    editor?.setEditable(isEditable);
  }, [editor, dailyInfo, isEditable]);

  return (
    <TiptapPresenter
      editor={editor}
      setIsEditable={setIsEditable}
      isEditable={isEditable}
      dailyContentsErase={dailyContentsErase}
    />
  );
};

export default TiptapContainer;
