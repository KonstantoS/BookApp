export const LEFT_JOIN = (table1, table2, key1, key2) => {
    return table1.map(elem1 => {
        return Object.assign({},elem1,{
            [key1]: table2.find(elem2 => {
                return elem1[key1] === elem2[key2]
            })
        });
    });
};