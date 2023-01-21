import { Category } from "../components/Category";
import { Select } from 'antd';
import { CATEGORY_LIST } from "../state/product";
import { useState } from "react";
import { CATEGORY_TITLE_LIST, DESCENDING_NUM, FILTERING_OPTIONS, SORT_OPTIONS } from "../state/constant";

export const IndexPage = () => {
  const [categoryList, setCategoryList] = useState(CATEGORY_LIST);

  const SortProduct = (selectedVal : number) => {
    if(selectedVal === DESCENDING_NUM){
      const sortedProducts = categoryList.map(Category => Category.sort((a,b) => b.price - a.price));
      setCategoryList(sortedProducts);
    }
    else{
      const sortedProducts = categoryList.map(Category => Category.sort((a,b) => a.price - b.price));
      setCategoryList(sortedProducts);
    }
  }

  const filterProduct = (selectedVal: number) => {
    if(selectedVal === 0 || selectedVal === 1){
      setCategoryList([CATEGORY_LIST[selectedVal]])
    }
    else{
      console.log('error');
      setCategoryList({...CATEGORY_LIST});
    }
    
  };

  return (
      <div style={{width: '960px'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <span>Sort</span>
            <Select options={SORT_OPTIONS} style={{width: '56px'}} onChange={(value) => SortProduct(value)}/>
          </div>
          <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <span>Filter</span>
            <Select options={FILTERING_OPTIONS} style={{width: '160px'}} dropdownMatchSelectWidth={false} onChange={(value) => filterProduct(value)}/>
          </div>
        </div>
        {
          categoryList.map((products,index) => {
            return (
              <Category key={CATEGORY_TITLE_LIST[index]} title={CATEGORY_TITLE_LIST[index]} products={products}/>
            );
          })
        }
      </div>
  );
}