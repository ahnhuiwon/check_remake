import React, { useEffect, useState } from "react";
import contents_dummy from '../json/contents.json';
import boss_dummy from '../json/boss.json';
import etc_dummy from '../json/etc.json';
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { set_contents, set_etc, set_boss } from "../redux/action";

export const useContentsUdt = () => {

    const { contents_data } = useSelector(state=>state.contentsReducer);
    const { etc_data } = useSelector(state=>state.etcReducer);
    const { boss_data } = useSelector(state=>state.bossReducer);

    const dispatch = useDispatch();

    const change_mode = (param) => {
        contents_data.arcane.map((data)=>(
            data.id === param ? data.first_mode = !data.first_mode : ''
        ));

        dispatch(set_contents(contents_data));
    }
    
    const sub_change_mode = (param)=> {
        contents_data.arcane.map((data)=>(
            data.id === param ? data.second_mode = !data.second_mode : ''
        ));

        dispatch(set_contents(contents_data));
    }

    const etc_change_mode = (param) => {
        etc_data.etc.map((data)=>(
            data.id === param ? data.first_mode = !data.first_mode : ''
        ))

        dispatch(set_etc(etc_data));
    }

    const boss_change_mode = (param) => {
        boss_data.week_boss.map((data)=>(
            data.id === param ? data.mode = !data.mode : ''
        ))

        dispatch(set_boss(boss_data));
    }

    const reset_mode = (filter) => {
        /**  패치 적용을 위해 contents_dummy로 변경 */
        if(filter === "contents"){
            contents_dummy.arcane.map((data)=> (
                data.first_mode = false
            ))

            contents_dummy.arcane.map((data)=> (
                data.second_mode = false
            ))

            etc_data.etc.map((data)=>(
                data.first_mode = false
            ))

            dispatch(set_contents(contents_dummy));
            dispatch(set_etc(etc_data));
        }

        if(filter === "boss"){
            console.log('진입');
            boss_dummy.week_boss.map((data)=> (
                data.mode = false
            ));

            dispatch(set_boss(boss_dummy));
        }
    }

    const close_mode = (param, filter) => {
        if(filter === "symbol"){
            contents_data.arcane.map((data)=>(
                data.id === param ? data.close = true : ''
            ));

            dispatch(set_contents(contents_data));
        } 

        if(filter === "etc") {
            etc_data.etc.map((data)=>(
                data.id === param ? data.close = true : ''
            ));

            dispatch(set_etc(etc_data));
        }

        if(filter === 'boss'){
            boss_data.week_boss.map((data)=>(
                data.id === param ? data.close = true : ''
            ));

            dispatch(set_boss(boss_data));
        }
    }

    const symbol_setting = (param, filter) => {
        if(filter !== "etc"){
            contents_data.arcane.map((data)=>{
                if(data.id === param){
                    if(data.close === false){
                        Swal.fire(
                            '추가할 수 없습니다!',
                            '이미 존재하는 컨텐츠입니다.',
                            'warning'
                        )
                    }
                }
            });
        
            contents_data.arcane.map((data)=>(
                data.id === param && (data.close = false)
            ));

            dispatch(set_contents(contents_data));
        } else {
            etc_data.etc.map((data)=>{
                if(data.id === param){
                    if(data.close === false){
                        Swal.fire(
                            '추가할 수 없습니다!',
                            '이미 존재하는 컨텐츠입니다.',
                            'warning'
                        )
                    }
                }
            });

            etc_data.etc.map((data)=>(
                data.id === param && (data.close = false)
            ))

            dispatch(set_etc(etc_data));
        }
    }

    const boss_setting = (param) => {

        boss_data.week_boss.map((data)=>{
            if(data.id === param){
                if(data.close === false){
                    Swal.fire(
                        '추가할 수 없습니다!',
                        '이미 존재하는 컨텐츠입니다.',
                        'warning'
                    )
                }
            }
        });

        boss_data.week_boss.map((data)=>(
            data.id === param && (data.close = false)
        ))

        dispatch(set_boss(boss_data));
    }

    const contents_set = () => {
        window.localStorage.setItem("user_setting", JSON.stringify(contents_data));
        window.localStorage.setItem("etc_setting", JSON.stringify(etc_data));
        Swal.fire(
            '완료되었습니다!',
            '선택하신 컨텐츠가 저장되었습니다.',
            'success'
        )
    }

    const boss_set = () => {
        window.localStorage.setItem("boss_setting", JSON.stringify(boss_data));
        Swal.fire(
            '완료되었습니다!',
            '선택하신 컨텐츠가 저장되었습니다.',
            'success'
        )
    }

    return { 
        change_mode, sub_change_mode, reset_mode, 
        close_mode, symbol_setting, contents_set, 
        etc_change_mode, boss_change_mode, boss_setting,
        boss_set
    };
}
