import React from "react";

const Card = ({ item }) => {
  return (
    <a target={"_blank"} href={item.url}>
      <div className={"w-full relative rounded overflow-hidden h-full"}>
        <img
          src={item.urlToImage}
          alt={"news"}
          className={"object-fit h-full"}
        />
        <div
          className={
            "bg-gray-700 bg-opacity-20 absolute top-0 bottom-0 w-full grid place-items-end"
          }
        >
          <div
            className={
              "py-1 pt-3 px-3 text-white font-medium text-sm leading-snug"
            }
            style={{
              background:
                "linear-gradient(0deg, rgba(38,38,38,1) 0%, rgba(240,240,240,0) 100%)",
            }}
          >
            <div
              className={""}
              style={{ lineBreak: "strict", textOverflow: "ellipsis" }}
            >
              <h4>{item.title}</h4>
            </div>
            <small className={"text-gray-300"}>{item.author}</small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
