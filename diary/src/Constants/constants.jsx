import { useRouter } from 'next/router';

// 상수는 대문자로 작성합니다.
/*
상수를 따로 빼놓을 때 고려할 사항!
1. 재사용성이 있는가?
2. 기능에 역할을 하고 있는가?
*/

export const LANDING_PAGE_CONTENT = "Let's Write";

// 얘들은 hook으로 빼내는게 좋지 않을까? 특히 PATH나 OBJECT 같은 경우.
export const CURRENT_ROUTER_PATH = () => useRouter().pathname.replace('/', '');
