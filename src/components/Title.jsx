import React from "react";

const Title = (data) => {
  return (
    <>
      <div className="view-1 flex flex-col  pt-4">
        <div className="login flex flex-col gap-3 ">
          <h2 className="font-bold text-xl">Log-in to your account</h2>
          {(() => {
            if (data.subHeading != null) {
              return <p>{data.subHeading}</p>;
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default Title;
