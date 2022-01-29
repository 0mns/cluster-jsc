import { useEffect } from "react";
import mapStyles from "../styles/Nav.module.css";

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    const element = document.getElementsByClassName("atoll-svg");
    for (let i = 0; i < element.length; i++) {
      element[i].style.cursor = "pointer";
      element[i].addEventListener("mouseenter", (e) => {
        element[i].classList.add("hoverr");
      });
      element[i].addEventListener("mouseleave", (e) => {
        element[i].classList.remove("hoverr");
      });
      element[i].onclick = function () {
        props.updateAtoll(element[i].id);
        
        
      };
    }
  });

  return (
    <div className="col-lg-4">
      <div className="card">
        <div>
          <div className="map-body">
            <div>
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 173.2 906.9"
                style={{
                  enableBackground: "new 0 0 173.2 906.9",
                }}
                xmlSpace="preserve"
              >
                <style>{".st0{fill:#3b6287}"}</style>
                <g id="Layer_1-2">
                  <g id="atoll-s" className="atoll-svg">
                    <path
                      id="Shape"
                      className="st0"
                      d="M94.8 892.8v4.1c0 .2 0 .3-.1.5l-1.1 2.6c-.1.1-.1.2-.2.3l-3.1 4-.3.3-2.8 2.1c-.2.2-.5.3-.8.3H84c-.5 0-1-.3-1.2-.8-.3-.7-.9-1.5-1.1-1.5s-2.8-2.1-3.5-2.7c-.1-.1-.2-.3-.3-.4l-1.4-2.9c-.1-.2-.1-.4-.1-.6v-3.9c0-.7.6-1.3 1.3-1.3h.6c.3 0 .6.1.9.3l.5.4c.2.1.3.2.5.3l1.8.5c.1 0 .2.1.3.1H84c.1 0 .3 0 .4-.1l4.2-1.4h.1l2.3-1c.2-.1.4-.1.5-.1h2.7c.4 0 .8.2 1 .5l.2.3-.6.1z"
                    />
                  </g>
                  <g
                    onClick={console.log("s")}
                    id="atoll-nvn"
                    className="atoll-svg"
                  >
                    <path
                      className="st0"
                      d="m116.6 854.1 2.5 3.8c.1.2.2.5.2.7v4.4c0 .2-.1.5-.1.7l-.1.3c-.4.7-1.2.9-1.9.6-.2-.1-.4-.3-.5-.5-.1-.1-.1-.3-.2-.5l-.5-2.8c0-.1 0-.1-.1-.2l-.9-2.4c0-.1 0-.1-.1-.1l-.7-1.3c-.1-.1-.1-.1-.1-.2l-.5-1.5c-.2-.7.1-1.4.7-1.7h.1c.5-.2 1-.1 1.4.1l.3.3.5.3z"
                    />
                  </g>
                  <g id="atoll-gdh" className="atoll-svg">
                    <path
                      className="st0"
                      d="M129.6 784.8c-1.6 1.3-3.5 2.7-3.8 3l-.1.1-6.4 5.6c-.4.4-1 .6-1.6.6l-3.7.1c-.2 0-.3 0-.5.1l-4 .9-.2.1-4.9 1.4c-.5.1-.9.4-1.2.8l-2.3 2.6c-.3.4-.8.7-1.3.8l-5.6 1.5c-.2 0-.4.1-.7.1h-5c-.3 0-.5 0-.7-.1l-5.4-1.7c-.4-.1-.8-.4-1.1-.7l-3.7-3.8-.1-.1-4.7-4.2c-.3-.3-.5-.6-.7-1l-2.2-5.7-2.1-6.2c-.1-.1-.1-.3-.1-.4l-1-5.9v-5.8c0-.4.1-.8.3-1.1L69 761c.2-.4.5-.8.9-1l2.4-1.7 57.3 26.5z"
                    />
                  </g>
                  <g id="atoll-ga" className="atoll-svg">
                    <path
                      className="st0"
                      d="M135.2 775.5c-1.1 2.1-3.3 6.4-3.3 6.9 0 .3-1.1 1.3-2.3 2.3l-57.5-26.4 2.3-1.6c.1-.1.3-.2.3-.3l4.7-4.7c.2-.3.5-.5.9-.6l5.8-2.5c.3-.1.6-.3.8-.5l6.2-6c.3-.3.5-.6.7-1.1l1.2-3.7c.3-.8.1-1.7-.4-2.3l-2.3-3-2.1-2.6c-.2-.3-.4-.6-.5-1l-.6-2.4c-.1-.2-.1-.4-.1-.6 0-.3.1-.6.2-.9.2-.5.5-.9 1-1.2l2.6-1.7.3-.3 1.1-1.1c.2-.2.5-.4.8-.5l1.6-.6c.4-.2.9-.2 1.4-.1l6.4 1.2c.2 0 .3.1.5.1 1.1 0 5-.1 5.6 0h.1c.7.1 1.3.6 1.7 1.2l2.9 4.9c.1.1.1.2.2.3l3.8 9.5.2.8.6 7.8.3 4.9c0 .7.4 1.4 1 1.8l3.8 3c.2.1.4.3.5.5 1 1.3 5.5 7.3 5.5 8.7 0 1.6 3 6.2 3.3 7.3.3.7.5 1.3.9 2 .4.9.3 1.8-.1 2.5z"
                    />
                  </g>
                  <g id="atoll-l" className="atoll-svg">
                    <path
                      className="st0"
                      d="m135 577.5-4.4 3.8c-.4.3-.6.8-.5 1.3v20.9c0 .3-.1.5-.2.7l-4.4 8.7c-.2.4-.5.7-.9.8l-6.1 2.1c-.1.1-.2.1-.3.1l-5 .7c-.1 0-.2.1-.3.1l-4.8 1.7c-.3.1-.6.1-.9.1l-4.1-.7c-.5-.1-.9-.3-1.1-.7l-2.1-3.2c-.2-.3-.4-.5-.7-.6l-1.9-.8c-.5-.2-.9-.7-1-1.3l-.7-4.2v-4c0-.3.1-.7.3-.9l2.1-3c.1-.1.2-.3.3-.3l4.9-3.8c.1-.1.2-.1.3-.2l6.2-3.2.2-.1 9.9-6.9c.1-.1.1-.1.2-.1l5.6-2.8 5-2.4c.2-.1.3-.2.5-.3l1.3-1.5c.2-.2.4-.3.6-.4l1.3-.5c.2-.1.4-.1.6-.1h.9c-.3.3-.5.7-.8 1z"
                    />
                  </g>
                  <g id="atoll-th" className="atoll-svg">
                    <path
                      className="st0"
                      d="m84.5 528.6 3.1 1c.4.1.7.3 1.1.5l3.4 2 1.7 1c.8.5 1.8.7 2.7.7h3.1c.8 0 1.5.2 2.2.5l2.3 1.1c.8.4 1.6 1 2.1 1.7l2.8 3.8c.2.3.4.6.5.9l1.3 2.9c.7 1.6.6 3.5-.3 5l-1.3 2.1c-.3.5-.7.9-1.1 1.3l-5.9 4.8c-.1.1-.3.2-.4.3l-7.6 5c-.2.1-.4.2-.5.3L82.9 569l-7 3.2c-.8.4-1.7.5-2.7.5l-4.1-.4c-.7-.1-1.4-.3-2-.6l-3.5-1.9c-1.2-.6-2.1-1.6-2.6-2.9l-1.5-4.2c-.1-.1-.1-.3-.1-.5l-2.1-7.6c-.1-.3-.1-.5-.1-.8l-.4-4.8c-.1-.6-.2-1.1-.5-1.7l-.8-1.7c-.3-.7-.5-1.4-.5-2.2V540c0-1.4.5-2.7 1.5-3.7l.2-.2 2.9-2.6c.7-.7 1.7-1.1 2.7-1.3l4.7-.7c.3 0 .5-.1.7-.2l6-1.8 4.5-1.4c.9-.3 1.8-.3 2.7-.1l3.1.7.5-.1z"
                    />
                  </g>
                  <g id="atoll-dh" className="atoll-svg">
                    <path
                      className="st0"
                      d="m66.8 477.3.3.1.5.2c1.5.5 2.6 1.6 3 3.1l.5 1.7c.2.5.3 1 .3 1.5v10.8l-.8 9.2c-.1 1-.5 2-1.1 2.8l-2.2 2.7c-.2.3-.4.5-.7.7l-5.2 4c-.5.4-1.1.7-1.7.9l-3.1.9c-2.5.7-5.1-.7-5.9-3.2l-.5-1.3c-.1-.1-.1-.3-.1-.5l-2.5-5.8c-.3-.6-.4-1.3-.4-1.9v-13.4c0-1.1.4-2.1 1.1-3l1-1.3.4-.6 2.7-4.5c.6-1 1.6-1.8 2.7-2.2l3.6-1.2c.5-.1 1-.2 1.5-.2h3.5c.4 0 .9.1 1.3.1l1.8.4z"
                    />
                  </g>
                  <g id="atoll-f" className="atoll-svg">
                    <path
                      className="st0"
                      d="m60.4 441.2 2.6 1.3c.4.2.7.4 1.1.7l2.8 2.3c.4.3.8.7 1.2 1.2l2.7 3.7c.8 1.1 1.2 2.3 1.2 3.7v1.5c0 .4-.1.8-.1 1.2l-1.3 7c-.3 1.7-1.3 3.2-2.8 4.1l-2.3 1.5c-.5.3-1.1.6-1.7.8l-4 1.1c-1.5.4-3.1.3-4.5-.5l-1.5-.8c-.8-.4-1.5-1-2-1.7-.7-.9-1.5-1.9-1.5-2.4v-4.1c0-1.1-.3-2.1-.8-3l-2.2-3.9c-.3-.4-.4-.9-.5-1.4l-.6-2.3c-.3-1.3-.2-2.8.3-4l.3-.6c.4-.9.9-1.6 1.7-2.3l1.4-1.2c.9-.7 1.9-1.2 3-1.5l2-.3c.3-.1.7-.1 1-.3 1.2-.7 3-.6 4.5.2z"
                    />
                  </g>
                  <g id="atoll-m" className="atoll-svg">
                    <path
                      className="st0"
                      d="M111.6 457.7c-.6 0-1 .4-1.1.9V482.3l-.7 3.9v.1l-1.1 10.4v7.8c0 .4.3.8.7 1l3.8 1.4c.3.1.7.1.9-.1l7-4.4c.1-.1.1-.1.2-.1l5.9-6c.1-.1.3-.2.4-.3l5.2-1.9c.3-.1.6-.4.7-.7l.7-2.3.2-.4 4.1-4.9c.1-.1.2-.3.2-.5l2.1-9.2c0-.1 0-.1.1-.1l1.8-4.9 1.8-4.4c.2-.6-.1-1.2-.6-1.4h-.1l-2-.7c-.1 0-.1-.1-.2-.1l-2.9-1.7c-.2-.1-.4-.2-.6-.1l-7.4.3c-.2 0-.5-.1-.7-.2l-6.5-4.9c-.2-.1-.4-.2-.7-.2h-11.2z"
                    />
                  </g>
                  <g id="atoll-v" className="atoll-svg">
                    <path
                      className="st0"
                      d="m119.7 397.5 4.2 3.5c.7.6 1.2 1.5 1.5 2.5l1.1 5.1c0 .1.1.2.1.3l2 7.1c.1.4.3.7.5 1l2.7 4.6c.4.7 1 1.2 1.7 1.6l2.2 1.3c.9.5 2.1.7 3.1.5l2.2-.5c.5-.1.9-.3 1.3-.5l2.7-1.5.3-.1 3.2-1.5c1.3-.6 2.8-.6 4.1.1h.1c.6.3 1.1.8 1.5 1.4l1.8 2.6c.7 1 .9 2.2.7 3.3l-.4 2.2c-.2 1.4-1.1 2.5-2.3 3.2l-2.3 1.3c-.3.1-.5.3-.8.3l-3.9 1.3c-.8.3-1.7.3-2.5.1l-3.2-.8c-.6-.2-1.3-.2-1.9-.1l-6.1 1.1-.3.1-1.7.5c-1 .3-2 .9-2.6 1.8-.6.9-1.6 1.6-2.7 1.9l-1.9.5c-1.1.2-2.2.1-3.1-.4l-2.5-1.3c-.7-.4-1.3-.9-1.7-1.6l-2.1-3.3-3.3-4.9c-.6-.8-1.4-1.4-2.3-1.7l-4-1.3-.3-.1-2-.5c-.9-.2-1.7-.7-2.2-1.4l-.1-.1c-.7-.8-1.1-1.9-1.1-3v-1.8c0-1 .4-2.1 1.1-2.9l.7-.8c.3-.4.6-.9.8-1.4l1.3-3.7c.1-.4.3-.8.6-1.1l4.8-6.6c.1-.2.3-.4.5-.6l2.3-2.2c.5-.5 1.2-.9 1.9-1.1l2.3-.7.9-.3 2.6-1.3.5-.1zM118.2 445.4l1.3.3c1.3.3 2.1 1.7 1.8 3-.2.8-.9 1.5-1.7 1.8l-2.1.6c-.5.2-1 .1-1.5-.1l-.5-.2c-1-.3-1.6-1.3-1.6-2.3v-.1c0-.7.3-1.5.9-1.9l.8-.7c.4-.3 1-.5 1.5-.5h.5c.2 0 .4 0 .6.1z"
                    />
                  </g>
                  <g id="atoll-adh" className="atoll-svg">
                    <path
                      className="st0"
                      d="M64.5 384.9v15.3c0 .3 0 .5-.1.8l-2.6 13.4c-.1.7-.5 1.4-.9 2l-3.2 3.9-.5.5-3.2 2.8c-.9.8-2.1 1.1-3.3 1l-2.8-.3-6.6-1.1c-.4-.1-.9-.2-1.3-.4l-1.5-.7c-1.3-.6-2.1-1.9-2.3-3.2l-.7-5.9v-3.6c0-.3 0-.6-.1-.9l-3.2-15.7c-.1-.4-.1-.7-.1-1.1l.7-14.7.3-3.5 29.1 1c0 .3 0 .6.1.9l.9 4.2 1.2 4.6c.1 0 .1.4.1.7z"
                    />
                  </g>
                  <g id="atoll-aa" className="atoll-svg">
                    <path
                      className="st0"
                      d="m62.1 374.2-29.1-.9 1.3-13.2v-.3l.3-11.7c0-.3.1-.7.1-1l.9-3.6 2.6-8.8c.4-1.2 1.2-2.1 2.3-2.7l1.1-.5c.2-.1.5-.2.7-.3l2.3-.6c1.5-.4 3 .1 4.1 1.1L50 333c.1.1.1.1.1.2l3.7 4c.1.1.3.3.3.5l3.7 5.5c.1.2.2.4.3.7l2.8 6.4c.2.4.3.9.3 1.4l.5 5.7v.4l.4 16.4zM63.7 323.8h3.1c.5 0 1 .2 1.3.5l1.3 1.3c.5.5.7 1.3.5 1.9l-.8 2.5c-.1.5-.5.9-1 1.1l-2.1 1c-.6.3-1.2.3-1.8-.1l-1.9-1.1c-.4-.3-.7-.7-.9-1.2l-.6-2.5c-.1-.4-.1-.8.1-1.1l.5-1.2c.1-.4.4-.7.7-.9l1.5-1"
                    />
                  </g>
                  <g id="atoll-k" className="atoll-svg">
                    <path
                      className="st0"
                      d="m119.5 248.2 1.4-.2c.9.1 1.5.9 1.4 1.8v.2l-.1.2c-.2.7-.9 1.3-1.7 1.3-.9 0-1.6-.7-1.7-1.6v-1.3l.7-.4zM112.1 273.4l-.2.4c-.4.9-.2 2 .5 2.7l.9.9c.5.5 1.1.7 1.7.7h8.6c1.3 0 2.4-1.1 2.4-2.4 0-.9-.5-1.8-1.4-2.2l-2.5-1.1c-.2-.1-.4-.1-.5-.2l-3.9-.7c-.3-.1-.6-.1-.9 0l-3 .5c-.7.1-1.4.7-1.7 1.4zM123.7 280l2.7 1.5c.1.1.1.1.2.1l4.2 3 .3.3 3.9 4c.1.2.3.4.4.5l2.2 4.9c.1.2.2.4.4.5l2.9 3.1.3.3 5.6 4c.1.1.3.2.3.3l2.9 3.3c.3.4.5.8.5 1.3v4.4c0 .5-.2 1-.6 1.4l-2.9 3c-.1.1-.2.1-.3.2l-5.8 4.4-3.9 3.1c-.2.1-.3.3-.5.5l-2.7 4.5c-.1.2-.2.5-.3.7l-1.2 7.4c0 .2-.1.5-.3.7l-1.9 3.3c-.3.5-.8.9-1.5 1l-2.3.4h-8.6c-.7 0-1.4-.4-1.7-1l-1.2-1.9c-.1-.2-.3-.3-.4-.5l-4.2-3.6c-.2-.2-.4-.4-.5-.6l-.9-1.7c-.2-.3-.2-.6-.2-.9v-17.6l1.1-6v-.3l.1-3.9.3-4.5.3-2.3c.1-.3.1-.5.3-.7l1.8-3.3c.1-.2.2-.3.3-.5l1-1.1c.2-.2.3-.4.4-.6l2.7-5.9c.1-.1.2-.3.3-.4l3.6-4.5c.4-.5 1-.7 1.6-.7.7.2 1 .3 1.3.4zM128.4 350.1l1 2.9c.1.5.2.9.2 1.4v3.5c0 .3-.1.6-.1.9l-2.8 13c-.1.5-.3 1-.5 1.4l-3.1 4.8c-.1.1-.2.3-.3.5l-3.2 3.8c-.8 1-2 1.5-3.3 1.5h-.4c-1.4 0-2.7-.7-3.5-1.9l-1.9-2.6c-.5-.7-.8-1.6-.8-2.5v-5.2l.6-12.5c0-.2 0-.4.1-.5l.7-3.9c.2-1.3 1.1-2.5 2.2-3.1l.1-.1c.7-.4 1.4-1 1.8-1.7.6-1.2 1.8-2 3.1-2.2l3.3-.5c.2-.1.4-.1.7-.1h1.4c.4 0 .7.1 1.1.1l.8.2c1.3.3 2.4 1.4 2.8 2.8z"
                    />
                  </g>
                  <g id="atoll-lh" className="atoll-svg">
                    <path
                      className="st0"
                      d="m124.9 181.6.3.5 2.1 4c.1.3.4.6.7.8l3 2.1 4.5 3 5.4 3.3c.5.3.8.7.9 1.3l1.7 5.6c.1.3.1.7.1 1.1l-1.3 6.6c-.1.6-.5 1.1-1 1.4l-5.6 3.4c-.2.1-.3.2-.5.2l-4 1.2c-.5.1-.9.1-1.4 0l-3.8-1.3c-.6-.2-1.1-.7-1.3-1.3l-1.1-3c0-.2-.1-.4-.3-.5l-1.7-2.4c-.2-.3-.6-.6-.9-.7l-4.5-1.9c-.2-.1-.4-.1-.6-.1l-5.1-.5c-.2 0-.4-.1-.6-.1l-1.9-.8c-.9-.4-1.5-1.3-1.3-2.3l.3-2.9c0-.1.1-.3.1-.4l1.9-6c.1-.5.4-.9.9-1.1l3-2c.1-.1.3-.2.5-.4l1.9-2.1c.2-.2.4-.4.7-.5l3.9-2c.1-.1.1-.1.2-.1l2.2-1.5c.2-.2.4-.3.7-.3l2.1-.5-.2.2z"
                    />
                  </g>
                  <g id="atoll-b" className="atoll-svg">
                    <path
                      className="st0"
                      d="m69 260.5-1.6 1.7-.1.1-4.1 3.1c-.1.1-.2.1-.3.1l-4.9 1.7c-.2.1-.4.1-.5.1l-3.7-.7c-.2-.1-.4-.2-.6-.4l-1.6-2c-.2-.2-.2-.4-.3-.7v-1.9c0-.3.1-.5.3-.7l1.2-1.3c.2-.2.5-.3.8-.3h13c.2 0 .3.1.5.1l1.3.6s.1 0 .1.1l.5.4zM52.5 213.1l.5-.8c.2-.2.4-.4.7-.6l3.1-1.8c.1-.1.1-.1.2-.1l2.2-1.7.6-.3 2.3-.7c.1-.1.2-.1.3-.1l5-2.5c.1-.1.2-.1.3-.1l3.8-1.2c.3-.1.7-.2 1-.1l3 .5c.4.1.8.3 1.1.6l3 3.2L83 211l4.5 4.5c.2.2.4.4.5.7l1.2 3.2c.3.7.1 1.6-.5 2.1l-2.2 2.2-.1.1-7.8 9.2-.3.3-4.7 3.7-8.2 6.1-.6.3-5.5 1.8c-.2.1-.4.1-.5.1l-5 .3c-.2 0-.4 0-.7-.1L51 245c-1.3-.3-2.3-1.3-2.7-2.7l-.9-2.9-.7-2.6-.1-.2-.8-4.3c-.1-.4 0-.9.2-1.3l1-2.1 1.1-2.1c.2-.3.3-.7.2-1.1l-.1-1.6v-.3l.3-3.9c0-.3.1-.6.3-.9l1.3-2.3.1-.1 2.3-3.5z"
                    />
                  </g>
                  <g id="atoll-r" className="atoll-svg">
                    <path
                      className="st0"
                      d="m61.3 131.5.4 1.1c.1.1.2.1.3.1h.7c.3 0 .5.2.5.4v.4c0 .2-.2.5-.4.5H62c-.1 0-.1 0-.2-.1l-1-.5c-.1-.1-.2-.2-.3-.4v-1.2c0-.3.2-.5.4-.5.2.1.3.1.4.2zM62.8 138.9l2.5 1.7c.2.1.3.2.3.4l1.7 4.4c0 .1 0 .1.1.1l2.3 4.2c.1.1.1.2.1.3l.7 5.8 1.2 9.8c0 .1.1.1.1.3l1.9 4.2c0 .1.1.1.1.3l.9 7.5v5.6l-.9 5.6v.1l-2.5 7.6c-.1.2-.2.3-.3.5l-3.1 1.8-7 4.3c-.1 0-.1.1-.1.1l-6.8 2.6c-.1 0-.1 0-.1.1l-2.3.5c-.4.1-.8-.2-.9-.6v-.4l.2-1 .2-1v-.1c.4-1.1.8-2.2 1.1-3.4 0-.4.5-2.7.6-3.3v-.3l-.5-3.7c0-.2-.2-.4-.3-.5l-2.9-2.2c-.1-.1-.1-.1-.2-.1l-2.6-3.3c-.1-.1-.2-.3-.2-.5v-6.8l1.3-7.7 1.1-5.2v-.1l2.5-7.2v-.1l2.5-9.6c0-.1.1-.3.2-.3l3.8-4.4s0-.1.1-.1l2.9-4.2.2-.2 1.3-.9c.1-.1.3-.2.5-.2l.3-.4z"
                    />
                  </g>
                  <g id="atoll-n" className="atoll-svg">
                    <path
                      className="st0"
                      d="M122 143.7v2.9c0 1.1-.5 2.2-1.3 3.1l-1.9 1.9c-.5.5-.8 1-1 1.7l-2.3 6.6c-.1.3-.2.6-.2.9l-.3 3.1c-.1 1.3-.8 2.4-1.8 3.2l-1.5 1c-.5.3-1 .6-1.5.7l-3.7.9c-1 .3-2.1.1-3-.3l-4.6-2.2c-.5-.3-1-.6-1.4-1.1l-3.7-4.5L90 157l-3.4-4.6c-.2-.3-.4-.6-.5-1l-2.3-5.8c-.2-.5-.3-1.1-.3-1.7v-3.1c0-.5-.1-1.1-.3-1.6l-1.1-2.9h11.5l11.7-7 2.3 1.9c.4.3.8.5 1.2.7l6.7 2.6c.9.3 1.6.9 2.1 1.7l3.6 5.5c.6.3.9 1.2.8 2z"
                    />
                  </g>
                  <g id="atoll-sh" className="atoll-svg">
                    <path
                      className="st0"
                      d="m105.4 129-11.7 7H82.2l-1.8-4.7c-.2-.5-.5-1-.9-1.4l-7-7.9c-.4-.4-.7-1-.9-1.5l-1.7-5.4c-.1-.1-.1-.3-.2-.5l-3.2-7.2c-.2-.3-.3-.7-.3-1.1l-1.1-5.7c-.1-.3-.1-.5-.1-.8V96c0-1.1-.4-2.1-1.1-2.9l-3.3-3.8-.3-.3-4.6-3.9c-.8-.7-1.3-1.6-1.5-2.6l-.1-.5 8.4-9h12.1v2.3c0 1.1.4 2.1 1.1 2.9l1.2 1.4c.3.3.6.6 1 .9L82 83c.4.2.8.4 1.2.5l1.9.5c.5.1.9.3 1.3.6l5.2 3.6c.6.4 1.1 1 1.5 1.7l3.2 6.6 4.4 9.2c.3.6.4 1.3.5 1.9v4.9l.5 6.6c0 .2.1.4.1.6l1.4 6.4c.2 1 .7 1.9 1.5 2.5l.7.4z"
                    />
                  </g>
                  <g id="atoll-hdh" className="atoll-svg">
                    <path
                      className="st0"
                      d="m34.1 82.8-2.6 3.1-.1.1-4.7 6.3-.3.6-.7 4v.1l-1.7 5.7c-.1.3-.2.6-.5.7l-1.7 1.1c-.2.2-.5.2-.8.3h-2.2c-.5 0-.9-.3-1.2-.7l-1.1-1.9c-.1-.2-.2-.4-.2-.7v-2.3c0-.1 0-.3.1-.4l1.3-4.2c0-.1.1-.2.1-.3l2.4-4.4c.1-.1.1-.1.1-.2l2.3-2.7 2.6-3.2c.1-.1.3-.3.5-.3l3.6-1.9h.1l2.7-1.2c.2-.1.3-.1.5-.1.6 0 1.1.3 1.3.9l.2.5c.4.3.3.8 0 1.1zM90.1 37c-.2.3-.4.6-.7.8l-4.2 4-.3.3-4.7 5.2c-.1.1-.2.3-.3.5l-2.6 3.8c-.3.4-.5.9-.6 1.3L75.6 57c-.1.4-.2.8-.1 1.2v4.5l-.9 7.6V73H62.4L54 82l-1.4-8.5c0-.1-.1-.3-.1-.4-.1-1.1-.4-6.1 0-6.5s0-5.6-.1-7.2c0-.4 0-.8.1-1.2l1.5-8.7c.1-.5.3-1.1.5-1.5l3.3-5.6c.1-.2.2-.4.3-.7l1.7-4.6h30.3z"
                    />
                  </g>
                  <g id="atoll-ha" className="atoll-svg">
                    <path
                      className="st0"
                      d="M94.6 24.2v3.1c0 .7-.1 1.4-.5 2L93 31.5l-2.6 5.2c-.1.1-.2.3-.3.4H59.9l1.3-3.5c.2-.5.5-.9.8-1.3l.7-.9c.8-.9 1.9-1.5 3.1-1.6l3.6-.3c.8 0 1.7-.3 2.3-.9l3-2.2c.3-.2.6-.5.9-.8l3.8-4.9c.4-.5.8-.9 1.3-1.1l3.4-1.9c.7-.3 1.4-.5 2.1-.5H89c1.5 0 2.8.7 3.7 1.9l.3.5c.2.3.3.6.5.9l.7 1.9c.2.7.4 1.2.4 1.8zM56.8.7l.5.2 2.1.9c.1 0 .2.1.3.2l2.7 1.9c.1.1.3.2.4.3L64 5.8c.1.2.2.2.3.3l1.9 1.5c.2.2.4.4.5.7l1.7 4.5c.1.2.1.4.1.6v1.3c0 .6-.3 1.1-.8 1.5l-.7.5c-.7.5-1 1.4-.7 2.2.2.4.2.8.1 1.1l-.3 1.1c-.2.8-.9 1.3-1.7 1.3h-.5c-.1 0-.3 0-.4.1l-2.1.5c-.6.1-1.3-.1-1.7-.5l-1.7-2v-.1l-2.5-2.5-.1-.1-3.1-2.5c-.2-.2-.3-.3-.6-.3l-2.3-.9-.4-.2-4.3-3.5c-.4-.3-.7-.8-.7-1.4V6.6l.3-1.8c.1-.6.6-1.1 1.2-1.3h.1c.2-.1.4-.2.5-.3l4.7-1.4c.2-.2.4-.3.7-.3l2.6-.6c.1-.1.3-.1.4-.1h2.3z"
                    />
                  </g>
                  <g id="labels">
                    <g id="Group">
                      <path
                        className="st0"
                        d="m111.9 8.2-.3.2c-.3.2-.6.3-1 .3-.2 0-.4-.1-.5-.2-.1-.1-.1-.1-.1-.2v-.2c-.1-.1.1-.8.4-.9s.3-.1.7-.2c.2 0 .4-.1.5-.2l.3-.2.4-.2c.2-.1.4-.2.5-.4.2-.1.4-.2.5-.4.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2.2-.1.4-.2.7-.2h.2c.2 0 .3.1.4.3.1.1.2.2.2.3.1.2.1.4.1.6v.4c0 .1 0 .3-.1.4 0 .1-.1.2-.1.3-.1.1-.2.3-.2.5-.2.3-.3.5-.5.7s-.2.2-.3.2c-.1.1-.3.1-.5.1s-.4-.1-.5-.3c-.1-.1-.1-.3-.1-.4.1-.2.1-.4.1-.5.1-.1.2-.1.3-.1l.1-.1c.2-.2.4-.4.5-.7v-.3c-.2.1-.4.3-.6.4-.2.1-.3.2-.5.3l-.3.3-.5.4c-.1.2-.3.3-.4.4zM120.1 6.6c-.2.1-.5.3-.8.5l-.9.6c-.3.1-.5.2-.7.4-.2.2-.5.3-.8.4-.1.1-.1.1-.3.1h-.3c-.1 0-.1 0-.2-.1l-.2-.1-.1-.1c-.1-.2-.1-.4-.1-.5 0-.2.1-.3.3-.5.2-.2.4-.2.6-.2l.3-.1.7-.2c.1-.1.2-.1.3-.2.1-.1.3-.1.4-.3l.3-.2.7-.5.2-.1c.2-.2.3-.3.5-.4l.1-.1h.5l.2.1c.2.1.3.3.3.5s-.1.3-.2.5c-.3.1-.5.3-.8.5z"
                      />
                    </g>
                    <path
                      className="st0"
                      d="M111.2 87.3h.1c.3 0 .5-.1.8-.1.3-.1.5-.2.7-.5.1-.1.3-.2.5-.2s.4.1.5.3c.1.1.1.3.1.4 0 .1-.1.3-.1.4-.2.2-.4.4-.7.6-.3.1-.5.2-.8.3l-.3.1c-.1 0-.1 0-.2.1h-1c-.1.2-.3.3-.5.5-.3.2-.5.3-.6.5s-.5.3-.8.5c-.2.1-.5.3-.7.5-.3.2-.6.3-.9.4l-.3.1c-.1 0-.2-.1-.3-.2l-.2-.2c-.1-.1-.1-.2-.1-.3l-.1-.1c0-.1 0-.2.1-.3l.1-.2c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1l.3.1c.3 0 .5-.2.7-.3l.8-.5.3-.2.1-.1c.1-.1.1-.1-.1-.2s0-.1-.1-.1l-.1-.3c0-.2.1-.4.3-.6.2-.2.4-.3.6-.3h.4l.3.1.1.1.1.1c.2-.3.2-.2.3-.1zM132.3 131.7c.2-.2.4-.3.7-.3h.2c.4.1.5.3.5.4s.6-.3.7-.4c.1-.1.3-.1.5-.1.1 0 .1.1.3.1l.3.3c0 .2.1.3.1.5.2 0 .4-.1.5-.1s.3-.2.4-.4.2-.3.4-.3c.3-.1.5.1.7.3l.1.2c.1.1 0 .3.1.3 0 .3-.2.5-.6.8-.1.1-.2.1-.3.2-.4.3-1 .5-1.5.5-.3 0-.4-.1-.7-.3-.1 0-.1-.1-.1-.3s-.1-.2-.1-.2c-.1 0-.3 0-.4.1-.1 0-.3 0-.4.1l-.1.2-.3.3c-.3.4-.7.7-1.1.9-.2.1-.5.3-.7.5l-.8.4-.3.1h-.3l-.2-.1c-.1-.1-.2-.2-.3-.2s-.1-.1-.1-.1l-.1-.1c0-.1-.1-.2-.1-.3 0-.1.1-.1.1-.3l.1-.1c.1-.1.2-.1.3-.2.1 0 .2-.1.3-.1l.3.1c.3 0 .5-.2.7-.3l.7-.5c.1-.1.3-.2.4-.3v-.3c-.2-.5-.1-.8.1-1zM25.8 160.4c-.1 0-.1-.1-.2-.1-.2-.2-.3-.4-.3-.7 0-.1.1-.3.1-.4l.1-.1s.1-.1.2-.1c.1-.1.2-.1.3-.1.1 0 .1-.1.2-.1h.2c.3 0 .5-.1.7-.2l.8-.4.3-.2-.1-.1c0-.1-.1-.1-.1-.2 0-.2 0-.4.1-.6 0-.1.1-.1.1-.1l.1-.1.3-.1.3-.1c.3 0 .5 0 .7.1 0 0 .1 0 .1.1l.1.1c.1 0 .3-.1.4-.1l.5-.3.3-.1.5-.3c.2-.1.3-.1.4-.1s.2.1.3.1c.2.1.3.3.3.6-.1.2-.2.4-.4.5-.1.1-.2.1-.3.1s-.5.3-.7.4l-.1.1c.1.1.1.1.2.1.5.3.3.4.4.5s0 .3-.1.3-.1.2-.2.2c-.1.1-.3.1-.4.1h-.5c-.2 0-.4-.1-.5-.1l-.5-.1c-.1 0-.2-.1-.3-.1H29l-1.2.8c-.1.1-.4.3-.7.5-.2.2-.5.3-.8.4-.1 0-.1.1-.2.1-.1-.2-.3-.2-.3-.2zM26.1 249.8c-.1.2-.2.5-.4.7-.2.2-.5.4-.7.6l-.3.1c-.1.1-.2.1-.3.1-.2.1-.4.1-.5.2-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1l-.9-.3-.1-.1-.3-.3c-.2-.2-.3-.5-.3-.8 0-.1.1-.3.1-.5.1-.4.4-.7.7-.9.4-.3.9-.5 1.5-.5.4 0 .7.2.9.5l.2-.1.5-.3.2-.1c.2-.1.4-.1.7-.1.3 0 .6.1.9.3.3.3.4.6.5.9-.1.2-.1.4-.2.5zm-3.8-.3c-.1 0-.2-.1-.3-.1-.1.1-.3.1-.4.2-.1.1-.2.3-.1.5s.3.2.5.2.1-.1.1-.1l.2-.2c.1-.1.1-.3.1-.4l-.1-.1zm2.3-.1c-.1 0-.2 0-.3.1l-.3.2-.4.4c-.1.1-.1.2-.2.3l.7-.1c.5-.1.8-.4.8-.6s-.2-.3-.3-.3zM146.2 223v-.1l-.3.1c-.2 0-.4-.2-.5-.3l-.1-.1v-.7l.2-.3c.1-.2.5-.5.5-.5.1-.1.2-.1.3-.2.1 0 .4-.2.5-.2s.1 0 .1.1c.1 0 .1.1.2.1l.2.3c0 .1.1.2.1.3 0 .1-.1.2-.1.2-.1 0-.1 0-.1.1 0 0-.1 0-.1.1-.1 0-.1.1 0 .2 0 .1.1.1.1.1.1 0 .2 0 .3-.1.1 0 .1-.1.3-.1s.1-.1.2-.1l.6-.1c.1.1.3.1.3.1l.1.1.1.3c0 .2-.1.5-.3.6l-.2.2c-.2.2-.4.4-.7.5-.2.1-.5.4-.8.6l-.5.4c-.2.2-.5.4-.8.5-.3.2-.6.3-.9.5-.3.1-.5.3-.6.3-.1.1-.1.1-.2.1s-.3 0-.4-.1c0 0-.1 0-.1-.1-.1-.1-.2-.1-.2-.2l-.1-.1c0-.1-.1-.1-.1-.2s-.1-.2-.1-.3c0-.1.1-.2.1-.3.1-.2.3-.3.3-.3.1 0 .3-.1.4-.1h.3c.1 0 .2-.1.3-.1.2-.1.3-.2.4-.3.3-.1.5-.3.7-.4.1 0 .1-.1.2-.1.1-.1.2-.1.3-.2l.1-.2zM161.2 329.5l-.2-.1-.1-.1c0-.1-.1-.2-.1-.3 0-.2.1-.3.2-.5.6-.6.5-.5.5-1.1 0-.2 0-.4.1-.5 0-.1.1-.2.1-.2.2-.2.2-.3.5-.3h.2l.3.1c.1 0 .1.1.1.1.1.1.2.3.2.5v.2c-.1.1 0 .1-.2.6 0 .1-.1.1-.1.2s.5-.2.8-.3c.5-.3.9-.6 1.3-.9l.2-.2c0-.1.1-.1.2-.1h.3c.1 0 .2 0 .3.1l.1.1c.1.1.1.1.1.2s.1.1.1.2 0 .1-.1.2c-.1.2-.2.3-.3.5-.2.1-.3.3-.4.3-.4.3-.9.5-1.3.8-.4.2-.9.5-1.3.7-.4.1-.8.2-1.2.2 0-.3-.1-.3-.3-.4zM165.6 398.6c-.1-.5.1-1 .6-1.3.3-.2.6-.4 1-.6.1 0 .2-.1.3-.1.1 0 .2-.1.3-.1h.6c.1 0 .3 0 .4.1.1.1.5.1.6.3.1.1.3.2.4.4.1.1.2.2.2.3.1.1.1.2.1.4s0 .4-.1.6c-.1.1-.1.2-.2.3l-.3.3c-.1.1-.3.2-.4.4s-.2.1-.4.2l-.9.6-.6.3c-.4.3-.7.4-.8.5-.3.1-.5.2-.8.4-.3.2-.7.3-1 .4l-.2.1h-.4c-.1 0-.2-.1-.2-.1l-.1-.1-.1-.1c-.1-.1-.2-.3-.1-.5 0-.1.1-.2.1-.4 0-.1.5-.5.8-.5h.3c.3 0 .5-.2.8-.4.3-.1.5-.3.8-.4l-.1-.1c-.1-.1-.1-.2-.2-.2-.4-.4-.4-.6-.4-.7zm1.6 0c.1 0 .1 0 .1-.1l.2-.1.3-.1c.1-.1.2-.1.2-.2s-.1-.2-.3-.2-.1 0-.1.1c-.1 0-.2.1-.3.1-.1.1-.2.1-.2.3.1.1.1.2.1.2zM23.9 461.6l.7-.5-.1-.1-.1-.1s-.1-.2-.2-.2c-.1-.1-.2-.3-.1-.5 0-.1.1-.3.3-.5l.5-.3-.1-.1c-.1 0-.2-.1-.3-.2-.2-.1-.2-.3-.2-.6 0-.1.1-.2.2-.3.1-.1.2-.2.3-.2.1-.1.3-.2.5-.3l.3-.2c.1-.2.3-.3.5-.3s.4.1.6.3c.1.1.1.3.1.4 0 .1-.1.2-.2.3-.1.1-.1.1-.1.2l.1.1c.2.1.3.3.4.5 0 .1.1.1.1.2s0 .1-.1.2c-.1.2-.2.3-.4.4l-.7.5s.1 0 .1.1c.1.1.1.2.2.3.1.1.1.2.1.3 0 .3-.2.6-.5.8l-1.5 1.1c-.6.4-1.3.9-1.7 1.1-.1 0-.2 0-.3.1H22c-.1 0-.2-.1-.5-.3l-.3-.3c-.1-.1-.1-.1-.1-.3 0-.1.1-.3.1-.4l.3-.3c.1-.1.2-.1.4-.1h.3c.2 0 .3-.1.5-.2.1 0 .1-.1.3-.2.4-.1.7-.2.9-.4zM20.1 508.6c-.3.2-.6.3-.9.4h-.4c-.1 0-.1 0-.1-.1 0 0-.1 0-.1-.1l-.2-.1-.1-.1c-.1-.1-.1-.2-.1-.3 0-.2.1-.4.1-.5.1-.1.2-.2.3-.2.1 0 .2-.1.3-.1h.3c.3 0 .6-.3.7-.3l.7-.4.4-.3c.1-.1.3-.3.5-.4l.1-.1c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.2.1-.4.5-.7.9-.7h.1c.1 0 .3 0 .4.1.1.1.2.3.3.5.2.1.4.1.6.1h.1c.2 0 .3-.1.4-.2.1-.1.2-.2.2-.3 0-.1-.1-.1-.1-.2l-.1-.1c-.1-.1-.3-.1-.5-.1h-.3c-.1 0-.2-.1-.3-.1l-.1-.1v-.4c.1-.1.2-.2.2-.3l.3-.2c.1-.1.1-.1.2-.1h.3c.1 0 .3.1.4.1.1 0 .1 0 .2-.1.2-.1.3-.2.5-.3.1 0 .1 0 .2.1l.2.1.1.2c.1.1.1.3.1.4 0 .1 0 .2-.1.3l-.2.2c.1.1.3.3.3.5 0 .1.1.1.1.2v.1c-.1.4-.3.8-.6 1.1-.2.2-.4.3-.7.4-.1.1-.2.1-.3.1-.3.1-.5.1-.8.1h-.9c-.4.2-.7.5-1.1.8-.4.3-.7.5-1 .7-.1 0-.3.1-.5.2zM143.7 545.1c-.3.4-.7.7-1.2.9-.1 0-.1.1-.2.1-.2 0-.4 0-.5-.1-.3 0-.6-.2-.9-.3-.1-.1-.2-.1-.3-.2l-.3-.3-.2-.2-.1.1-.3.2.1.1.1.1.2.2c.1.1.1.3.1.4 0 .3-.1.5-.1.8-.3.5-.9.9-1.5.9-.2.1-.4.1-.7.1-.1 0-.3-.1-.5-.1l-.3-.1-.3-.1-.3-.6c0-.6.8-.7.8-.7s.1 0 .1.1c.2.1.4.1.6.1h.2c.3-.1.3-.1.3-.3l-.1-.2c-.1 0-.2-.1-.3-.2-.2-.1-.3-.3-.3-.5 0-.3.2-.6.5-.8.1-.1.2-.2.4-.3.1-.1.3-.2.4-.3.4-.3.8-.6 1.3-.8.1 0 .1-.1.3-.1s.2-.1.3-.1l.6-.3c.2-.1.4-.1.7-.1l.3.1.1.1c.4.3.6.5.7.7 0 .1 0 .2.1.3 0 .1.1.2.1.3.3.4.3.8.1 1.1zm-1.1-.9c-.2-.1-.3-.1-.5-.1-.2.1-.4.2-.6.4.2.1.3.2.5.3h.2c.1 0 .1 0 .2-.1s.1-.2.1-.3v-.2zM168 595.8c-.1 0-.2.1-.3.1-.1 0-.2.1-.3.2-.1.1-.5.3-.9.7-.3.3-.7.5-1.1.7-.3.1-.5.3-.7.5-.5.3-.7.5-.8.5s-.4.3-.5.3c-.3.2-.6.4-1 .5-.1 0-.2.1-.3.1h-.3c-.1-.1-.2-.2-.3-.2l-.2-.2-.1-.2c0-.1 0-.2-.1-.3s.1-.3.1-.5.1-.1.3-.3l.3-.1h.3c.2 0 .3-.1.5-.1.1-.1.2-.1.3-.2l.7-.4c.1 0 .1-.1.2-.1.1-.1.3-.1.4-.3.2-.2.4-.3.5-.4l.3-.3h-1c-.5 0-.5-.3-.5-.4v-.2c0-.1.1-.3.3-.5s.3-.1.5-.2c.1 0 .3-.1.4-.1.1-.1.2-.2.3-.2.1-.2.2-.3.3-.5.1-.1.3-.2.5-.3.3 0 .5 0 .7.1.1.1.2.2.2.4s-.1.4-.2.6c.2 0 .3-.1.4-.1s.3-.1.3-.1l.4-.1h.3c.3.1.5.4.5.8 0 .5-.2.7-.4.8zM140.3 723.7l-.3.2c-.2.2-.5.3-.8.3-.1 0-.2 0-.3-.2s-.1-.1-.1-.2v-.1c0-.1.1-.6.3-.7.2-.1.4-.2.5-.2.2 0 .3-.1.5-.2l.3-.1.3-.2c.1-.1.3-.2.5-.3.2-.1.3-.3.5-.3.1-.1.1-.1.2-.1.1-.1.2-.2.3-.2.2-.1.3-.2.5-.2h.1c.1 0 .2.1.3.2.1.1.2.2.2.3 0 .1.1.3.1.5v.3c0 .1 0 .2-.1.3 0 .1-.1.2-.1.3 0 .1-.1.3-.1.4-.1.2-.2.4-.4.5-.1.1-.2.1-.3.1-.1.1-.3.1-.4.1-.2 0-.3-.1-.4-.3-.1-.1-.1-.2-.1-.3 0-.1 0-.3.1-.4.1-.1.1-.1.2-.1l.1-.1c.2-.2.3-.4.4-.6v-.1c-.1.1-.3.2-.5.3-.1.1-.3.2-.4.3l-.3.2-.5.3c-.1.2-.3.3-.3.3zM147.2 721.1c.1 0 .3.1.4.1l.1.1c.1 0 .1.1.1.2s0 .3-.1.4c-.2.2-.4.3-.7.3-.1 0-.1 0-.2.1l-.2.1c-.1.1-.1.1 0 .1.2.1.3.4.3.6 0 .1 0 .3-.1.4-.1.2-.2.3-.4.4-.1.1-.1.1-.3.1l-.1.1c-.4.1-.8.2-1.2.1-.3 0-.6-.1-.9-.2-.1-.1-.2-.2-.2-.4 0-.1.1-.3.1-.3l.1-.1c.1-.1.3-.2.4-.2.1 0 .3 0 .4.1.3.1.6.1.9 0l.1-.1.1-.1c0-.1 0-.1-.1-.1l-.1-.1c0-.1-.1-.1-.1-.2s0-.1-.1-.1-.1-.1 0-.2c0-.1 0-.1.1-.2 0-.1.1-.1.1-.1.1-.1.3-.2.5-.3.3-.2.6-.4.9-.4-.2 0 0-.1.2-.1zM52.4 813c-.2.1-.4.3-.7.3h-.5c-.1 0-.1 0-.1-.1l-.1-.1-.1-.1c-.1-.1-.1-.2-.1-.3 0-.1 0-.3.1-.4 0-.1.1-.1.3-.2.1 0 .2-.1.3-.1h.3c.2 0 .5-.2.6-.3l.6-.3.3-.2c.1-.1.3-.2.4-.3l.1-.1c-.1-.1-.1-.1-.1-.3v-.2c.1-.3.4-.6.7-.5h.1c.1 0 .3 0 .3.1s.2.3.3.4c.1 0 .3.1.5.1h.2c.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3 0-.1-.1-.1-.1-.1l-.1-.1c-.1-.1-.3-.1-.4-.1h-.2c-.1 0-.1-.1-.3-.1s-.1-.1-.1-.1v-.3c.1-.1.1-.2.2-.2l.2-.1s.1 0 .1-.1h.2c.1 0 .2 0 .3.1h.1c.3-.1.3-.1.5-.2.1 0 .1 0 .2.1l.1.1.1.1c0 .1.1.2.1.3 0 .1 0 .1-.1.2l-.1.1.3.3c.1 0 .1.1.1.2v.1c0 .3-.2.6-.5.8-.1.2-.3.3-.5.3-.1 0-.1.1-.3.1-.2.1-.4.1-.7.1h-.7c-.4.3-.7.5-.9.7-.3.2-.5.4-.8.5-.1.1-.3.2-.5.3zM61.1 808.8c.1 0 .3.1.4.1l.1.1c.1 0 .1.1.1.2s0 .3-.1.4c-.2.2-.4.3-.7.3-.1 0-.1 0-.2.1l-.2.1c-.1.1-.1.1 0 .1.2.1.3.4.3.6 0 .1 0 .3-.1.4-.1.2-.2.3-.4.4-.1.1-.1.1-.3.1l-.1.1c-.4.1-.8.2-1.2.1-.3 0-.6-.1-.9-.2-.1-.1-.2-.2-.2-.4 0-.1.1-.3.1-.3l.1-.1c.1-.1.3-.2.4-.2.1 0 .3 0 .4.1.1 0 .3.1.4.1.2 0 .4 0 .5-.1l.1-.1.1-.1s0-.1-.1-.1l-.1-.1c0-.1-.1-.1-.1-.2s0-.1-.1-.1-.1-.1 0-.2c0-.1 0-.1.1-.2 0-.1.1-.1.1-.1.1-.1.3-.2.5-.3.3-.2.6-.4.9-.4-.1 0 .1-.1.2-.1zM138.1 854.3l-.3.3-.3.4c-.1.1-.1.1-.1.2l-.1.3c0 .2.1.3.2.4.3.1.5.1.8.1h.3c.1 0 .3 0 .4-.1.1-.1.3-.1.5-.1.1 0 .2 0 .3.1.1.1.1.1.1.2s.1.2.1.3c0 .1 0 .1-.1.2 0 .1-.1.1-.1.1l-.1.1-.2.1-.3.1h-.9c-.3 0-.5 0-.8-.1-.2 0-.4-.1-.6-.2-.1 0-.2-.1-.3-.2l-.2-.2c-.1-.2-.2-.4-.2-.6 0-.2.1-.5.1-.7.2-.4.5-.7.8-1.1l-.1-.4v-.1c0-.1.1-.2.1-.3l.1-.1c.1-.1.3-.1.4-.1.1 0 .2 0 .3.1.1 0 .1.1.2.2l.1.1h.3c.1 0 .1-.1.3-.1.1 0 .1-.1.2-.1.1-.1.2-.1.3-.1.1 0 .1 0 .2.1l.3.3c0 .1 0 .1.1.2v.1c.1.1.1.1.1 0s.1 0 .1-.1.3-.3.3-.3l.1-.1c.1-.1.1-.1.2-.1.2 0 .4.1.5.3 0 .1.1.2.1.3 0 .1-.1.2-.1.3l-.3.3c-.1.1-.2.3-.3.3-.1 0-.1.1-.2.1l-.6.3h-.3c-.3 0-.4-.1-.6-.4l-.1-.2c-.1 0-.4 0-.4.1-.2-.3-.2-.3-.3-.2zM106.4 897.2c0-.1 0-.2.1-.3l.3-.3c.1-.1.2-.1.3-.1-.1 0-.1-.1-.2-.1-.1-.1-.2-.3-.2-.5v-.1c0-.1 0-.2.1-.3.1-.2.2-.3.3-.3.1-.1.2-.1.3-.1l.3-.1c.2 0 .4 0 .6.1l.2.1.2.2c0 .1.1.1.1.2h1.5c.2 0 .4 0 .6.1h1.5c.1 0 .3-.1.5-.1.1 0 .3-.1.4-.1.2-.1.4-.2.5-.3.1-.1.3-.2.3-.3.1-.1.3-.1.4-.1.1 0 .3.1.4.1.2.2.3.5.1.7l-.1.2c0 .1-.1.1-.2.3s-.1.1-.2.1c-.3.2-.5.3-.8.4-.2.1-.4.1-.7.1-.2 0-.4.1-.7.1-.1 0-.3.1-.4.1h-2.7c-.3 0-.6-.1-.7-.1l-.1.1-.2.2-.6.4-.3.2c-.1.1-.2.1-.3.1h-.1c-.2-.2-.5-.4-.5-.6zM160.7 489.7h-.4l-.2-.1-.3-.3c-.1-.1-.2-.3-.1-.5 0-.1 0-.2.1-.3l.1-.1c.1-.1.2-.2.4-.3.1-.1.2-.1.3-.1h.3c.3 0 .6-.1.8-.3.4-.2.7-.4 1.1-.6s.5-.3.5-.4.2-.1.2-.1h-.5c-.2 0-.5.1-.7.1-.2.1-.4.2-.6.1-.1 0-.2-.1-.3-.1l-.1-.2c-.1-.1-.1-.3-.1-.5s.1-.3.3-.5c.1-.1.3-.2.5-.3.5-.1.7-.1.9-.1h.5c.2 0 .4 0 .6.1l.5.1c.1.1.1.1.2.1.2.1.3.3.4.5.1.2.1.3.1.5 0 .1 0 .2-.1.3 0 .1-.1.2-.1.3-.1.1-.2.3-.3.3l-.3.3c-.1.1-.2.1-.2.2s-.4.2-.4.3c-.5.3-1.1.6-1.7.9-.1.1-.3.2-.5.2-.2.1-.4.2-.6.2l-.3.3zM3 342.3l-.3.2c-.3.2-.6.3-.9.3-.2 0-.4-.1-.5-.2-.1-.1-.1-.1-.1-.2v-.2c-.1-.1.1-.8.4-.9s.3-.1.7-.2c.2 0 .4-.1.5-.2l.3-.2.4-.2c.2-.1.4-.2.5-.4.2-.1.4-.3.5-.4.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2.2-.1.4-.2.7-.2H6c.2 0 .3.1.4.3.1.1.2.3.2.5.1.2.1.4.1.6v.4c0 .1 0 .3-.1.4 0 .1-.1.2-.1.3-.1.1-.1.3-.2.5-.2.3-.3.5-.5.7s-.2.2-.3.2c-.1.1-.3.1-.5.1s-.4-.1-.5-.3c-.1-.1-.1-.3-.1-.4 0-.2.1-.3.1-.5.1-.1.2-.1.3-.1l.1-.1c.2-.2.4-.4.5-.7v-.2c-.2.1-.4.2-.6.4-.1.1-.5.3-.5.3l-.3.2-.7.4c-.1.1-.3.2-.3.2zM8.6 342.3l-.3.2c-.3.2-.6.3-.9.3-.2 0-.4-.1-.5-.2-.1-.1-.1-.1-.1-.2v-.2c-.1-.1.1-.8.4-.9s.3-.1.7-.2c.2 0 .4-.1.5-.2l.3-.2.4-.2c.2-.1.4-.2.5-.4.2-.1.4-.3.5-.4.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2.2-.1.4-.2.7-.2h.2c.2 0 .3.1.4.3.1.1.2.3.2.5.1.2.1.4.1.6v.4c0 .1 0 .3-.1.4 0 .1-.1.2-.1.3-.1.1-.1.3-.2.5-.2.3-.3.5-.5.7s-.2.2-.3.2c-.1.1-.3.1-.5.1s-.4-.1-.5-.3c-.1-.1-.1-.3-.1-.4.1-.2.1-.4.1-.5.1-.1.2-.1.3-.1l.1-.1c.2-.2.4-.4.5-.7v-.2c-.2.1-.4.2-.6.4-.1.1-.5.3-.5.3l-.3.3-.5.4c-.2 0-.4.1-.5.1zM3.2 394c-.3.1-.5.3-.7.4l-.2.1h-.2c-.1 0-.1 0-.1-.1-.1 0-.1 0-.1-.1l-.1-.1-.1-.1c-.1-.1-.1-.2-.1-.3 0-.2.1-.3.1-.5.1-.1.2-.1.3-.2-.1-.1 0-.1.1-.1h.3c.2 0 .5-.1.7-.3l.7-.4.3-.2c.1-.1.3-.2.4-.3l.1-.1c-.1-.1-.1-.2-.1-.3 0-.1 0-.1.1-.2.1-.4.4-.6.8-.6h.1c.1 0 .2 0 .3.1.1.1.2.3.3.4.2.1.4.1.5.1h.3c.1 0 .2-.1.3-.2s.2-.2.1-.3l-.1-.1-.2-.2c-.1-.1-.3-.1-.4-.1h-.2c-.1 0-.2-.1-.3-.1v-.5c.1-.1.1-.2.2-.3l.2-.1c.1-.1.1-.1.2-.1H7c.1.1.3.1.4.1.1 0 .1 0 .2-.1.2-.1.3-.1.5-.2.1 0 .1 0 .2.1l.2.1.1.2c0 .1.1.2.1.3 0 .1 0 .1-.1.2l-.2.1c.1.1.2.2.3.4.1.1.1.1.1.2v.1c0 .4-.2.7-.5.9-.2.1-.4.3-.6.3-.1.1-.1.1-.3.1-.2.1-.5.1-.7.1h-1c-.4.3-.7.5-.9.7s-.7.5-.9.6c-.3.3-.5.4-.7.6zM10.2 392.2l-.3.2c-.3.2-.5.3-.9.3-.2 0-.3 0-.4-.2s-.1-.1-.1-.2v-.2c-.1-.1.1-.7.3-.7.2-.1.4-.2.6-.2.2 0 .3-.1.5-.2l.3-.2.3-.2c.2-.1.3-.2.5-.3.2-.1.3-.3.5-.4.1-.1.2-.1.3-.2.1-.1.2-.1.3-.2.2-.1.4-.2.6-.2h.1c.2 0 .3.1.4.2.1.1.2.3.2.4.1.2.1.3.1.5v.3c0 .1 0 .2-.1.3 0 .1-.1.2-.1.3l-.2.4c-.1.2-.3.4-.5.6-.1.1-.2.1-.3.2s-.3.1-.4.1c-.3 0-.6-.3-.6-.6.1-.2.1-.3.1-.4s.1-.1.2-.1l.1-.1c.2-.2.3-.4.4-.7v-.2c-.2.1-.3.2-.5.3-.2.1-.3.2-.5.3l-.3.3-.5.3c.1.4-.1.5-.1.5zM21.2 59.5c-.2.1-.5.3-.7.3H20c-.1 0-.1 0-.1-.1l-.1-.1-.1-.1c-.1-.1-.1-.2-.1-.3 0-.2.1-.3.1-.5 0-.1.2-.1.3-.2.1-.1.2-.1.3-.1h.3c.2 0 .4-.1.6-.3l.6-.3.3-.2c.2-.1.3-.2.4-.3l.1-.1c-.1-.1-.1-.1-.1-.3v-.2c.1-.4.4-.6.8-.6h.1c.1 0 .3 0 .3.1s.2.3.3.4c.2.1.4.1.5.1h.3c.1 0 .2-.1.3-.2.1 0 .1-.1.1-.2s-.1-.1-.1-.1l-.2-.2c-.1-.1-.3-.1-.4-.1h-.2c-.1 0-.1-.1-.3-.1s0-.1 0-.2v-.3c.1-.1.1-.2.2-.3l.2-.1c.1 0 .1 0 .1-.1h.3c.1 0 .2 0 .3.1h.2c.3-.1.3-.1.5-.2.1 0 .1 0 .2.1l.1.1.1.2c.1.1.1.2.1.3 0 .1 0 .1-.1.2l-.2.2c.1.1.2.2.3.4.1 0 .1.1.1.2v.1c0 .3-.2.6-.5.9-.2.2-.4.3-.6.3-.1 0-.1.1-.3.1-.2.1-.5.1-.7.1h-.7c-.3.2-.6.5-.9.7-.3.3-.6.5-.8.6-.2.1-.4.2-.7.3zM30.2 56.5c-.1.1-.4.3-.7.5l-.8.5s-.3.1-.6.3c-.2.1-.4.2-.7.3-.1 0-.1.1-.3.1h-.3c-.1 0-.1 0-.1-.1l-.1-.1-.1-.1c-.1-.1-.1-.3-.1-.5s.1-.3.2-.4c.1-.2.3-.2.5-.2h.3l.6-.2c.1-.1.2-.1.3-.2.1-.1.2-.1.3-.2l.4-.2c.3-.2.4-.3.6-.4l.1-.1c.1 0 .2-.1.5-.3l.1-.1h.3l.2.1c.1.1.2.2.2.4 0 .1-.1.3-.1.4-.2.1-.4.3-.7.5z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;