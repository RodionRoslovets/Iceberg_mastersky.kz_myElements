// window.addEventListener('DOMContentLoaded', ()=>{
//     let televisions = {
//         		name:'Телевизоры',
//         		href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/',
//         		brands:
//         			[
//         			{
//         				name:'LG',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/',
//         				failures:[
//         					{
//         						name:'Телевизор LG не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор LG слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор LG пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор LG полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор LG нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор LG искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-lg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-lg-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Samsung',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/',
//         				failures:[
//         					{
//         						name:'Телевизор Samsung не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Samsung слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Samsung пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Samsung полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Samsung нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Samsung искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-samsung/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-samsung-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Sony',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/',
//         				failures:[
//         					{
//         						name:'Телевизор Sony не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sony слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Sony пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Sony полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Sony нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sony искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sony/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sony-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Hitachi',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/',
//         				failures:[
//         					{
//         						name:'Телевизор Hitachi не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Hitachi слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Hitachi пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Hitachi полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Hitachi нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Hitachi искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hitachi/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hitachi-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Polar',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/',
//         				failures:[
//         					{
//         						name:'Телевизор Polar не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Polar слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Polar пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Polar полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Polar нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Polar искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-polar/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-polar-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Sanyo',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/',
//         				failures:[
//         					{
//         						name:'Телевизор Sanyo не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sanyo слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Sanyo пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Sanyo полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Sanyo нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sanyo искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sanyo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sanyo-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Sharp',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/',
//         				failures:[
//         					{
//         						name:'Телевизор Sharp не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sharp слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Sharp пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Sharp полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Sharp нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Sharp искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-sharp/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-sharp-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Skyworth',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/',
//         				failures:[
//         					{
//         						name:'Телевизор Skyworth не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Skyworth слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Skyworth пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Skyworth полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Skyworth нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Skyworth искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-skyworth/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-skyworth-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Viera',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/',
//         				failures:[
//         					{
//         						name:'Телевизор Viera не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Viera слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Viera пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Viera полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Viera нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Viera искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-viera/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-viera-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'JVC',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/',
//         				failures:[
//         					{
//         						name:'Телевизор JVC не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор JVC слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор JVC пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор JVC полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор JVC нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор JVC искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-jvc/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-jvc-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Daewoo',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/',
//         				failures:[
//         					{
//         						name:'Телевизор Daewoo не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Daewoo слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Daewoo пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Daewoo полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Daewoo нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Daewoo искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-daewoo/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-daewoo-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Elenberg',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/',
//         				failures:[
//         					{
//         						name:'Телевизор Elenberg не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Elenberg слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Elenberg пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Elenberg полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Elenberg нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Elenberg искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-elenberg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-elenberg-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Haier',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/',
//         				failures:[
//         					{
//         						name:'Телевизор Haier не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Haier слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Haier пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Haier полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Haier нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Haier искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-haier/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-haier-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Hisense',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/',
//         				failures:[
//         					{
//         						name:'Телевизор Hisense не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Hisense слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Hisense пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Hisense полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Hisense нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Hisense искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-hisense/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-hisense-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Panasonic',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/',
//         				failures:[
//         					{
//         						name:'Телевизор Panasonic не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Panasonic слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Panasonic пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Panasonic полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Panasonic нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Panasonic искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-panasonic/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-panasonic-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Philips',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/',
//         				failures:[
//         					{
//         						name:'Телевизор Philips не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Philips слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Philips пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Philips полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Philips нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Philips искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-philips/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-philips-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Thomson',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/',
//         				failures:[
//         					{
//         						name:'Телевизор Thomson не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Thomson слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Thomson пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Thomson полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Thomson нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Thomson искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-thomson/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-thomson-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Toshiba',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/',
//         				failures:[
//         					{
//         						name:'Телевизор Toshiba не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Toshiba слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Toshiba пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Toshiba полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Toshiba нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Toshiba искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-toshiba/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-toshiba-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Vestel',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/',
//         				failures:[
//         					{
//         						name:'Телевизор Vestel не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Vestel слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Vestel пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Vestel полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Vestel нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Vestel искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vestel/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vestel-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			},
//         			{
//         				name:'Vitek',
//         				href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/',
//         				failures:[
//         					{
//         						name:'Телевизор Vitek не включается',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D0%BD%D0%B5-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Vitek слетела прошивка',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0/'
//         					},
//         					{
//         						name:'Телевизор Vitek пропал звук',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B7%D0%B2%D1%83%D0%BA/'
//         					},
//         					{
//         						name:'Телевизор Vitek полосы по экрану',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-%D0%BF%D0%BE-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D1%83/'
//         					},
//         					{
//         						name:'Телевизор Vitek нет изображения',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D0%BD%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/'
//         					},
//         					{
//         						name:'Телевизор Vitek искажение картинки',
//         						href:'https://mastersky.kz/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%BE%D0%B2-vitek/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-vitek-%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/'
//         					}
//         				]
//         			}
//         			]
//             },
//         teleMenu = document.getElementById('teleMenu');

//     let catMenu = document.createElement('div');
//     catMenu.classList.add('category-menu');

//     let catHead = document.createElement('h3');
//     catHead.classList.add('category-menu__heading');
//     catHead.innerHTML = televisions.name;

//     catMenu.appendChild(catHead);

//     let catList = document.createElement('ul');
//     catList.classList.add('category-menu__list');
    
//     televisions.brands.forEach(el =>{
//         let catListItem = document.createElement('li');
//         catListItem.classList.add('category-menu__list-item');
        
//         let catLink = document.createElement('a');
//         catLink.href = el.href;
//         catLink.innerHTML = `Ремонт телевизоров ${el.name}`;

//         catListItem.appendChild(catLink);

//         let catSub = document.createElement('div'),
//             subList = document.createElement('ul');

//         catSub.classList.add('category-menu__subcategory');
//         subList.classList.add('subcategory');

//         el.failures.forEach(elem =>{
//             let subListItem = document.createElement('li');
//             subListItem.classList.add('subcategory-item');
                
//             let subLink = document.createElement('a');
//             subLink.href = elem.href;
//             subLink.innerHTML = elem.name;

//             subListItem.appendChild(subLink);
//             subList.appendChild(subListItem);
//         });

//         catSub.appendChild(subList);

//         catList.appendChild(catListItem);
//         catListItem.appendChild(catSub);
//     });

//     catMenu.appendChild(catList);

//     teleMenu.appendChild(catMenu);
// });