// ../src/components/Modal.js

import Logo from "../assets/image/icon_logo.png";
import styled from "styled-components";
import Kakao from "../assets/image/icon_kakao.png";
import Twitter from "../assets/image/icon_twitter.png";
import Google from "../assets/image/icon_google.png";
import Line from "../assets/image/icon_line.png";

const BackGround = styled.div`
  position: fixed;
  top: 0;
  background-color: grey;
  height: 100%;
  width: 100%;
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 600px;
  width: 350px;
  margin: auto;
  border-radius: 7px;
`;

const Out = styled.button`
  display: flex;
  width: 350px;
  font-size: 15px;
  margin: 5px 0px 0px 5px;
  border: 0px;
  background-color: white;
`;

const LogoImg = styled.img`
  width: 230px;
  height: auto;
  margin: 30px auto 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0px 0px;
  border: 0px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin: 20px;
  background-color: #ff2f6e;
  border: 0px;
  border-radius: 5px;
`;

const Logos = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-around;
`;

const KakaoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const GoogleImg = styled.img`
  width: 50px;
  height: 50px;
`;

const TwitterImg = styled.img`
  width: 50px;
  height: 50px;
`;

const AppleImg = styled.img`
  width: 50px;
  height: 50px;
`;

const LineImg = styled.img`
  width: 50px;
  height: 50px;
`;

const GreyBox = styled.div`
  width: 300px;
  height: 50px;
  background-color: #f7f7f7;
  color: #363638;
  margin: auto;
  border-radius: 7px;
`;

const Pink = styled.div`
  color: #ff2f6e;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Grey = styled.div`
  color: #363638;
  font-size: 15px;
  margin-bottom: 30px;
  margin-right: 5px;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  text-align: center;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Modal = (props) => {
  return (
    <>
      <BackGround>
        <WhiteBox>
          <div style={{}}>
            <Out>X</Out>
          </div>
          <LogoImg src={Logo}></LogoImg>
          <b>로그인</b>
          <Input type="text" placeholder="  이메일" color="grey" />
          <Input type="text" placeholder="  비밀번호" style={{}} />
          <Button type="submit">로그인</Button>
          <Pink>비밀번호를 잊어버리셨나요?</Pink>
          <TextRow>
            <Grey>계정이 없으신가요? </Grey>
            <Pink>회원가입</Pink>
          </TextRow>
          <Grey>────────── OR ──────────</Grey>
          <Logos>
            <KakaoImg src={Kakao} style={{}}></KakaoImg>
            <GoogleImg src={Google} style={{}}></GoogleImg>
            <TwitterImg src={Twitter} style={{}}></TwitterImg>
            <LineImg src={Line} style={{}}></LineImg>
          </Logos>
          <GreyBox style={{}}>
            <Grey style={{}}>
              TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
              사용해요.
            </Grey>
          </GreyBox>
        </WhiteBox>
      </BackGround>
    </>
  );
};

export default Modal;
