// map: []=> new Array // sơ chế dữ liệu
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//[2,4,6,..]

const newNumbers = numbers.map((item) => {
    return item * 2;
});
console.log(newNumbers);


const companies = [
    { id: 1, name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { id: 2, name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { id: 3, name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { id: 4, name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { id: 5, name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { id: 6, name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { id: 7, name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { id: 8, name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { id: 9, name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const companyInfot = companies.map((company) => {

    return {
        name: companies.name,
        category: companies.category,
        startEnd: `${companies.start}-${companies.end}`,
    };
});
console.log(companyInfot);

//companyInfor.map(item)=> UI:h1 c.title,p.startEnd

//================filter() loại bỏ các dữ liệu không thích

const newCompanies = companies.filter((item) => {
    console.log(item);
    return item.category === "Finance";
})

function removeCompany(id) {
    return companies.filter(item => item.id !== id); //
}
const newCompanies2 = removeCompany(9);
console.log(newCompanies2);


//========================= reduce

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];


const totalBill = cart.reduce((total, product) => {
    console.log(total, product);// total=0
    return total + product.price
}, 0);

