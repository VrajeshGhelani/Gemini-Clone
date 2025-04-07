import React, { useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { chatSession } from "../../config/germini.js";

const Main = () => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const delaypara = (index, nextWord) => {};

  const handleChat = async () => {
    // console.log(input);

    setResultData("");
    setShowResult(true);

    setLoading(true);
    setRecentPrompt(input);

    // const res = await chatSession.sendMessage(input);

    // console.log(res);
    // console.log(res.response);
    // setAiAnswer(res.response.text());

    // let resArray = res.split(" ");

    // let newArray = "";
    // for (let i = 0; i < resArray.length; i++) {
    //     if (i === 0 || i % 2 !== 1) {
    //         newArray += resArray[i];
    //     } else {
    //         newArray += "<b>" + resArray[i] + "</b>";
    //     }
    // }

    console.log(res);
    console.log(res.response);
    // setAiAnswer("Gemini is the name of the third sign of the zodiac, a constellation, and an AI model Gemini the zodiac sign The sun passes through Gemini from about May 21 to June 21 Gemini is represented by the twins Castor and Pollux, who were the sons of Zeus and Leda in Greek mythology Geminis are said to be quick-witted, playful, and intellectually curious  Geminis are known for being social butterflies who can talk to anyone about anything  Gemini the constellation Gemini is one of the 88 modern constellations  It's located between Taurus and Cancer and is often depicted as twins sitting together ");
    console.log(aiAnswer);
    setResultData(res);
    setLoading(false);
    setInput("");
  };

  useEffect(() => {
    console.log(aiAnswer);
  }, [aiAnswer]);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello , krish</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p>{aiAnswer}</p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={handleChat} />
              <p>{loading ? "Loading" : "Send"}</p>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacuurate info , including about people , so
            double-check its reponses . Your Privacy and Gemini Apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
// export const newChat =()=>{
//     setLoading(false);
//     setShowResult(false);
// }

export default Main;
