import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";


function Home() {
  function navfun1(){
    window.location.href = "https://www.linkedin.com/in/shivani-kumari-66135a1a1";
  }
  function navfun2(){
    window.location.href = "mailto:shivanikumari6109@gmail.com";
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shivani kumari</h2>
        <div className="prompt">
          <p>An Android developer with a passion for learning and creating.</p>
          <LinkedInIcon className="icons-des" onClick={navfun1} />
          <EmailIcon className="icons-des" onClick={navfun2} />
          <GithubIcon
            className="icons-des"
            onClick={() => {
              window.location.href = "https://github.com/shivi7519";
            }}
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <div id="skill-div">
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png" />
            <h5>HTML</h5>
          </div>
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png" />
            <h5>CSS</h5>
          </div>
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png" />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png" />
            <h5>Reactjs</h5>
          </div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPGElEQVR42u1de3gU1RXfPMAAYggoUQoVKFL8itQa+AQqjwKG7G7Cq4DUgtZCUAr48dhHeFjSokBVqFZAVHxUgUrEDysUCLubWCOgQIqKGuCrtrYoogg2GF8E0nt2T9o12Z17ZubOa2fu951/YHPnvGbuveec+zsulzOc4QxnOMMZqTcCnnBnRhMZLWe0ldEhRh8yqmNUz+gcozOMjjEKM1rNaCqjXgF3paNAqw2fpyKNGW8Ao5WMjjJqUEHvM3qI0cB5+eWOck3+prdj5BNg9GT0NqPpjLIcbZvL8O3x8/4fjQzflI6jI2Q42jfU8JFMZoS5uH43GECvM+rvWMKYt/463Mw1GEywiVwR8IZbOlbRYfjdIdjglTD6xgTGj6d9cNpwLKT9Jm+7QKPBMfAfjA7jBu84HgmVzneCUV/HUtoYvxujGhXG+ZTR84zmMRrCqONs947mXxhPqAX7vx8wmsZoCzqJnOecZTTCsZhY4/fGwI1co3/C6EFGgwKeUIbCZ1/CaBZ+KajP/ZJRvmM5Mca/Bg0px/AHGN3MjN5SIB8tMcZwVsbyMtCxoDql92D0kQzDv8nIM7+oUkueYCnaI+ML9D3HksoUfSmjv8t42+axE0KmTrzBPmEtkbe3GF3sWFTOUS+m4L/KeOt76c3jhAll4AiLiDw+41hV3hu2kqjYbUa/Xez5i4m83uxYlqZQN6MLBIU+xyjTaH7xS7CaeAzNdSwsbfz2xOPeS2yZME3oFfYejKcIge+NjpWlHWA9QYn/hiCOCXnPJZxY4Mt2g2PpxAocQPj0Q5h2gIllKCQ48KsBbyjNsXjcCHqiCZ5XCcpbbAFH3kiQo8ix+reVNpYY3cu0gCyXEwpTXvM55WWNG6jdaYS8PuTcf2Qhh15IcOghjvVjyiogKGu1xWRqQ9gQbnGsH1PWTo6iPmN0mQXl8nPkgoKWy+1ufEisnOcoaolFZWuLzisl23y7O8ASjoJgM9XOwvI9wJGv2rbGnztylwtv4kgpaKXFHfxqwv6mu13f/jyOYs6ngnII8Y05dnWA5RzFlKeInHdy5NxlVwd4m6OYySkiZ2dOiLtOZOmaVZTSlVBUeXEKyfs3jrwD7eYA03mFHikm7wqOvD67OcCfOAr5VYrJy4t2Pmsb45eWlrowpy+lkJ4p5gA5nH3AETu9/Z05xv+opKAyFeV+VyrZ5bcL5gATdgzHAV5MUbm3ceTubRcH4IV/S1NU7j9w5B5tFwco4yhigupneMMZcEGT0T2MNjN6gdFjjGYYdYWbPfcmzv3C2XZxgNc5DtBH8QZzaCXMP4m33jLawKiTQRvgnhD+RTSyeIyDFSlv/BJvlYtwufISRY7ljsBtoidl3hweZILTwRSErnvYDm9/Dq/4Q8m8C9w7YO5nFFwf/xygZsygG78nlG4HB+jNMcgxhfPepgI4AlLSF7mcoYsDDOUYY6/8OSNZCM2iBirmKMbrgaoZ7WdUBRlJvIK2HrOXc3EzB3cYcktGlTv1/TIdYBzHEDsU7q6NAoaCiqXXGD0Ou3hI6jBq5Vg6ubFu4Si0TMGcj5sMLexrRAxbgUdRB1U0zlh3cJT3RwVz7jGZAyQCr3gB9ykd7O4AszjKWq9gzjdM7gBNS8G347KVZUcHmM1R0GMK5nzZQg4QT6cYrQIcJDs5wAyOUp5QMOcaizpAfPErLBE/toMD/FI0gAKgglncAeKpktHgVHaAiRwF/Fn2nN4QJH6OqFT8rSXeqvT/U6SF3xtujUhl3QH+FR2tmNFSRpswXvCFRo4A1+WuSUUHyOdBv6iY94JCZe8NuisUoYgGPZEMvPwxBWHjDqvgI1HSal1KnRwQ4l1K6MMq5l6sQMlQmtZFsIy56BDPCmpgAUmrWxd4wmmp4ACdeMIqn73BhaFaKow8pKW7aitv6CL2jFFYBKt2udhleTh6LNQ4xwFRylLpZD/Es3ayW8dwbz8QcOubAEKo+5m4TCh1gtOwj7L6V+BdjpC9BH5tJkOJGaN7EegZklEtjJTfV1QOiCjDIe+hYr/wiGkDSdFNkTc5NDtm2KSEK7RRXORa7GGgxBEOMvquGZM9dVIVrojfLyWY34YRUrgpHVLgBCdNAZuH6NnxcKnFEr8tdoCVmw+sF/QSMBMS3aMcb6Tx22GBYzxTT0v8vh+vOaPLxgOqk/BI+6XMcPIdRjDbGfHwm7VbhQrdhH/jjoCAX3GEyXbZfGD18CsynOCCrphD2M1Dqs79Kom/5aFmFLicASDUGdEja6zIhOoI8/Uy/nEOIzMl/v5+zt+ucMzfbNl8T4YTzNCSmS7YUZvbzEFiDh6ocrVj9mY6a084QscvoxO1YALq+t+h9s/zJwm6IIbeN5z1rJNj9mZ6yyQ2p2g8HQwS+XA46lXICFl6OPNVcua43TF5ohHNeZQQg0enhFUcEW63NhJ0+vo+Yb55nHlCKfDGwnJZBNk8rIW4TlTLeUBRIToBgHG1Vfswau39IWpfHOinR8iHX2G5nbsnkoY5iGqJ9C7kJi4V4ASziHbZrBieHuLNjM4QHgICt5c5d3UqgSdhLUCFjKLQQgHPvIv4vGLZk2MnjxDxM9NBAfM8RO2aYGFFmoWMf1RB1Y+qdnILxoapvZbOykZexbWLN/FxpVU1GEms58w/zPTGLwinEza1yegrtc0wgrG+xpSoYQjS0VTjZBOaHkCVS57KN2en6EJRA97+ySqrffapbSGD9Q8nhTWwZD9cRpjsNgHK+ykhqNHL5A5wSEDt3w0C+PAQTgZQB9masp59zq/hb1CvPHc0vvAB51lPmdj43QRVAa8SxM+jhGeV8CbhQZuCwXIEKpG3kz0nlVwy2AHGiboUIoifbEL31U+TxgYApJlw7BsvWImXEapmN5nUAW4X5ABvCeTp54Tn+ZL9MQ/IuSI4IqSFItcS8t19TegAUwQ5gLAEGHQmRZQTqee97/dEMhMJtI9jhH4arqW8mv4qn8dccQFChROVygTzdSPhmaOa/lF3zi5yu8bKfIJyZMJd914oPWP0C9WxblU8RzJxTVXrAEIR0hEzkQeesbWpAeZz/mCwxg5A+QokojOxuv9IhkFfgQdUGr9ORG4gAV9jCEGodvF/EJa6twdAjzooU819/3IjvgbYL/gzFXzfowlfsZtY/yQFhgLeaLHmF0YnZjAGUatCmeGgAU2m4WREaIKZiPYH3JEsDflaxHn+hsYf9uf8sKuOylyk8pO60AAHaK/AcSEb2lFjvrpwHPNENAyNBQbJfvSOzspcp9IBakUGqog83ycTLOr33JCsON6qOPz04K2963RUZFuZlyL0r4xtznN3As+1uMdaKBqTgMBfgMPbJBfePxdXTKCc2ZGCztVbdOR5K4GfWwyMVfTlbkI5jRwH6chssSAHeEMnfosIvBwJuEOZxjlAFEpf6gv1HAjyscQPuunoANMEOcBRHXjNJnRAE547UcirVPPK/S6Oh2TryOhoQQ6wRwden6KAUPkKjcf3QRyCpHkBl3QIONJKR0avFOQAazTmcxLxwub1JslZSG3yazkOoO9tXUEVNvka8teTiAC23mWSwXj5nVS9hQvj0cl+cKXOzKqtsTsc9ITTNeKtbZIr8U3pYy3i+yr4liryOe/iVJHoimPrU1dlW69V0ioQA4bcTuTjZy4TDcbPQ1JJId5nd6oBDHdUAJcCdKcW/GD9/cNEHp4vnVDmMpkDlEniM3Jam641iOlcGV+COhFVyhK8LCXy8aGZPv3EY2CNC7HrTZEL+NZy4IkuB3BB5U2JuwlPyr71Ik95VBhaSLoMN5vx/bGLI1LH/N2U1mvdTeDFPfCW7UyMGA5j1EYz58svh2f+Vsbys8RlwgF7OA7fa+FHfTg/WuCy0YBGjjLAGKLlcn53JN2kDrCMmzhDgU9L3fv32aG7ZUxhbYgJnv+VdCtteau5LAVRu/LgefMaBd9i9xbneB2+WobxT+hZLKNAngJuPaUbQSuwwlbqxwf87t1pKWz8GzlJsWa9js3SezjRQPTRl3jgEfEKyOGAOMaKB1LN8O4o+NJSmTV9dWbv70PspzReTsAA6F9G1uFroKSrOJdhkhl/mMnlyiIE0k41g51n//ATCl695Xf5sZLpOZwcSLLSriEWcOx7CbIsS3b2PUj440kWfuuvxabPSuDZ+1lAvhGE5exs0opkApJnYwRuoMUMn4Nwd+cUtpjvYQEZuxE3souS7x5j98oqiLvg/hZQSguEVPtEYYYxJBcBzSA54Zp9DTFu0ZI32dWEE0EDIomMM+k6n46VO8cUGv4CrqUZFjB+LrGRNh2UioDmGa+oVQFPxBSNjPwxTN1JKjt0wQ65yCJLWy9EaKXIRYfg9XnDaZxiwqYEb5pnet5BoxTRAbuDvaeyominVcCq4XKnjAaVDyp5m1orOCe/Eq2X92r/6cTzLlQSbxZwo+h0tMG1N5Qmk4duFHxkDULWcl7OjX63wjI53D0fVKBQ6CuwPHrx1CumRm+2e0dj8KYYFVAroID0AoJN5CrQTX88HsIcEaxdyNbQ8N9htFJmJ9IN7GueqfbB2SigUiUDiMNfGN0N9XLQ7gy8OOgJt2m6ZAQ8u9MQrAru3A1GpS7HeryTgsrG4xFHBijUyeQkX52vEasAWtn2UZsmDsS+wmMwWScXQGOlX1QWF49TawQboPG2bC0eK88S4GNFEGwQxwVHysccwsYN98lMGoWx6moaFrJAaXmOL26ZDMY6hl2BfQRvwpclonBpg7+ZptVnaIIgXBwj6AAkQIIKlyQsVo0I5qlesNPXqMUfpp47N6rof6snncP9wpBk7eyIMg8mNMsyWs772ca9lZ670YGMXjapQuBNWCDiSIdIG8dMbHz4KvUx5CyKhQdDsbS83mBFHMNbMHlq3vbEThC9GDIWQ8PnTWJ4OHLngw3MEpjoyujXMrqLqaVaPF3MiZ3FG/SSE04oS6J3//U3OoRzN5k+GYchSjgKvYihVVFv+NOY3Mnze8OZRspYWrStsaL6LjxS1mto9HKMf+S4rDbmFe5Kw7dmNLaKWYOVt1WYxDiKxq3BWywVGN1bhcYerqQtjQFOn41dwO/GkPIHKnIRYSzpdkNcxOUMaw62d2iLRSgAJzMVEVlhmfwNLiMBRB0H6Pnr4ahpmjXdGc5whjOckerjvxocMrhZmUF9AAAAAElFTkSuQmCC" />
            <h5>Redux</h5>
          </div>
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png" />
            <h5>ReactNative</h5>
          </div>
          <div>
            <img src="https://vikramsharma.netlify.app/static/media/github.3b9e32903aa89111875d.png" />
            <h5>Github</h5>
          </div>
          <div>
            <img src="data:image/png;base64,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" />
            <h5>Java</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
