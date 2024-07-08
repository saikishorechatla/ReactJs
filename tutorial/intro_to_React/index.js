import React from "react";
import ReactDom from "react-dom";
import './index.css'



const student = [
  {
    id : 2100032302,
    name : "Kishore",
  },
  {
    id : 2100032410,
    name : "Sarath",
  },
  {
    id : 2100030261,
    name : "Koushik",
  }
]


let name = ['phone', 'smart', 'mobile' ]

function BookList() {
  return (
    <section>
      {      
        name.map((val)=> <h1>{val}</h1>) }{
        student.map((val)=>{
              return (val.name)
          })
      }
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title/>
      <Author/>
    </article>
  );
};

const Image = () => (
  <img
    src="https://ci3.googleusercontent.com/meips/ADKq_NZpzlATefkQsPdUCTJY53EetGaQakMZuH-wK6Ys42ypW2OHG6AyZKViFYPPAT66ZpZV5R1kci_l1OJf1Cz9-lCtxNc5poB3eA=s0-d-e1-ft#https://s3.rdbuz.com/assets/images/logo/b_logo.png"
    alt="book"
  />
);

const Title = () => <h1>Red Bus</h1>;

const Author = () => <h4>Kishore</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
