import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoardList(){
    return (
        <div>
            <Link to="/boardCreate">작성하기</Link>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>버튼</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>테스트</td>
                        <td>test</td>
                        <td>01.08</td>
                        <td><button>식제하기</button><button>수정하기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;