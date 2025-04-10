import React from "react";
import Header from "./general/Header";
import Title from "./general/Title";
import ContentList from "./general/ContentList";

const HelpAndSupport = () => {
    return (
        <>
            <Header />
            <Title title={"Help And Support"} />
            <ContentList
                title={"FAQ"}
                heightOfComponent={"flex-1"}
                imgSrc1={null}
                imgSrc2={"./arrow.png"}
                list={[
                    "What is charge controller?",
                    "Why do we use charge controller?",
                    "How do I reset charge controller",
                    "How do I update charge controller",
                    "How do I update this app",
                ]}
            />
        </>
    );
};

export default HelpAndSupport;
