import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoardCreate(){

    const [boardContent, setBoardContent] = useState ({
        title:'',
        content: ''
    })

    const getValue = (e) => {
        const {name, value} = e.target;
        setBoardContent ({
            ...boardContent,
            [name]:value
        })
        console.log(boardContent);
    }

    const [viewContent, setViewContent] = useState([]);

    const sumit = () => {
        setViewContent(viewContent.concat({...boardContent}));
        console.log(viewContent);
    }

    return (
        <div className="BoardCreate">
            <div className="addListBox">
                <input placeholder="제목" onChange={getValue} name="title"/><br></br>
                <input placeholder="내용" onChange={getValue} name="content"/>
                <button onClick={sumit}>게시하기</button>
            </div>

        {viewContent.map((i,index)=> {
            return (
                <div className="listBox">
                    <p key={index}>1</p>
                    <p>2025.1.12</p>
                    <p>{i.title}</p>
                    <p>{i.content}</p>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </div>
            )
        })}
            
        </div>
    );
}

export default BoardCreate;