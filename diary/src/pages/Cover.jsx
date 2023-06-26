import React from 'react';
import Image from 'next/image';
import Month from 'public/Img/month.png';
import Logo from 'public/Logo/logo.svg';
import Monthly from 'public/Img/monthlypage.jpg';
import Weekly from 'public/Img/weeklypage.jpg';
import Daily from 'public/Img/dailypage.jpg';
import { useRouter } from 'next/router';
import Button from 'src/Components/Button/Button';

const Cover = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('Monthly');
  };
  return (
    <>
      <div className="flex items-center h-12 px-8 bg-slate-200">
        <Image
          width={72}
          src={Logo}
          alt="로고"
        />
      </div>
      <div className="h-full">
        <div className="bg-white w-1/2 border-dashed border-2 border-slate-200 mx-auto my-10 p-10 text-center">
          <Button
            className="bg-yellow-300 m-2 p-2 text-lg rounded hover:bg-yellow-400"
            onClick={onClick}
            content="♡❤ 다이어리 Go! ❤♡"
          />
          <div className="flex flex-col gap-1 underline text-gray-600 bg-yellow-50 m-5 p-10 text-sm">
            <p>하루하루 일상을 기록할 다이어리를 소개합니다! </p>
            <p>( ⸝⸝ ᷇࿀ ᷆⸝⸝ƪ)✧</p>
            <p>우리가 손수 쓰던 다이어리에 맞춰</p>
            <p>
              <span className=" text-black">Month, Weekly, Daily</span>
              <span> 로 취향에 맞춰 쓸 수 있어요!</span>
            </p>
            <p>그 밖의 편리한 기능도 넣었답니다.</p>
            <p>스티커를 붙여 다꾸다꾸도 할 수 있어요!</p>
          </div>
          <div className="p-5 m-5">𝟐𝟎𝟐3 𝐌𝐲 𝐃𝐢𝐚𝐫𝐲 ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <div className="m-5">Monthly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Monthly} alt="Month img" width="auto" height="auto" className="shadow" priority />
          <div className="m-5">Weekly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Weekly} alt="Month img" width="auto" height="auto" className="shadow" priority />
          <div className="m-5">Daily ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Daily} alt="Month img" width="auto" height="auto" className="shadow" priority />
        </div>
      </div>
      <div className="h-12 bg-slate-200" />
    </>
  );
};

export default Cover;
