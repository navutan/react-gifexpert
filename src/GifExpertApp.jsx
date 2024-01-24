import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Hunter x Hunter']); 

    const onAddCategory = (newCategory) => {
        
        //categories.push(newCategory);
        //console.log(newCategory);
        //setCategories(['hola mundo']);
        if( categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [ ...categories, 'Hunter X Hunter']);
    }

    //onAddCategory();

    return (
        <>
            {/* titulo  */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory = { (valor) => onAddCategory( valor )}
            />
            
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
  
        </>
    )
}