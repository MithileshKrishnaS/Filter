import React, { useState } from 'react';
var oddarray=[];
var array=[];
var evenarray=[];

const Filter = () => {

    const [filter,setFilter]=useState({
        array:'',
        odd:'',
        even:''
    });
    
    function setvalue()
    {
        setFilter({array:array,odd:oddarray,even:evenarray});
        console.log(oddarray)
    }

    function filterOdd(...array)
    {
       oddarray=[]
        var j=0;
        for(let i=0;i<array.length;i++)
        {
            if((array[i]%2)!==0)
            {
                oddarray[j]=array[i];
                j++;
            }
        }
    }
    
    function filterEven(...array)
    {
        evenarray=[]
        var j=0;
        for(let i=0;i<array.length;i++)
        {
            if((array[i]%2)===0)
            {
                evenarray[j]=array[i];
                j++;
            }
        }
    }
    

    function generateRandomList()
    {
        array=[]
        var n=7;
        for(let i=0;i<n;i++)
        {
            array[i]=Math.floor(Math.random()*100)+1;
        }
        filterOdd(...array);
        filterEven(...array);
        setvalue();
    }

    return (
        <div className="main">
            <button onClick={generateRandomList}>Generate Randonm List</button>
            <h1></h1>
            <div className="content">
                <div className="sub1">
                    <h2>Array  </h2>
                    {filter.array.map?.(input=>(<h3>{input}</h3>))}
                </div>

                <div className="sub2">
                    <h2>Odd Array </h2> 
                    {filter.odd.map?.(input=>(<h3>{input}</h3>))}
                </div>

                <div className="sub3">
                    <h2>Even Array </h2> 
                    {filter.even.map?.(input=>(<h3>{input}</h3>))}
                </div>
            </div>
        </div>
    )
}

export default Filter
