import "./textBox.scss"




type Props = {
    title: string;
    text: string;
};

export const TextBox = (props: Props) => {
  return (
    <div>
    <div className="pageTitle"><h1>{props.title}</h1></div>
    <div className="pageText"><h2>{props.text}</h2></div>
    </div>
  );
};
