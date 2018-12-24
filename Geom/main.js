const questions = [
`Линейные операции над векторами`,
`Базис и координаты вектора`,
`Декартовы и прямоугольные координаты точки`,
`Уравнение линии на плоскости`,
`Уравнения окружности`,
`Расстояние между двумя точками`,
`Определители и их свойства`,
`Коллинеарные и компланарные вектора`,
`Ортонормированный базис и прямоугольные координаты вектора`,
`Условие коллинеарности двух векторов в координатной форме`,
`Скалярное произведение двух векторов`,
`Проекция вектора на вектор`,
`Правая и левая тройки векторов`,
`Векторное произведение двух векторов`,
`Векторное произведение в координатной форме`,
`Смешанное произведение векторов`,
`Геометрический смысл смешанного произведения векторов`,
`Условие компланарности трех векторов`,
`Прямая на плоскости`,
`Угловой коэффициент прямой`,
`Угол между прямыми на плоскости`,
`Плоскость в пространстве`,
`Расстояние между плоскостями`,
`Уравнения прямой в пространстве`,
`Расположение прямой и плосокти в пространстве`,
`Расстояние между скрещивающимися прямыми`,
`Условие принадлежности двух прямых одной плоскости`,
`Уравнение прямой в пространстве`,
`Кривые второго порядка`,
`Построение линии в полряной системе координат`,
`Параметрическое задание кривой`,
`Поверхности и кривые в пространстве`,
`Общее уравнение поверхности второго порядка`,
`Аффинная классификация кривых второго порядка`,
`Умножение матриц.`,
`Невырожденная матрица`,
`Обратная матрица`,
`Решение матричных уравнений`,
`Линейная комбинация векторов `,
`Линейная зависимость и независимость векторов`,
`Минор k-того порядка`,
`Ранг матрицы`,
`Теорема о базисном миноре`,
`Условие линейной независимости m векторов`,
`Ранг матрицы, окаймляющиe миноры`,
`Ранг матрицы элементарные преобразования`,
`Решение произвольных систем методом Крамера`,
`Однородные системы`,
`Расширенная матрица системы линейных уравнений`,
`Теорема Кронекера-Капелли`,
`Метод Жордана-Гаусса`,
]

const FirstLink = "https://docs.google.com/document/d/1NzhS-kme07DzK785eBQR1zOb9BEmVLRGB-q7D2A3FFg/edit#heading=h.pjk5oxk93hwj"
const SecondLink = "https://docs.google.com/document/d/1VIs4Ke7vBwiFt3u4Lj4Jlj_hv4aQ7BLx0hoy3vE3qQw/edit"
const ThirdLink = "https://docs.google.com/document/d/1zxxHo6Gf-dYINb9KinS_IIcxVGzws0AEhHqUZgDS2qE/edit"
const FourthLink = "https://docs.google.com/document/d/1V_uT3fwjddNNcz5VG0_b5KwmLv6uf7ibz1FVKFJqYs0/edit"
const FifthLink = "https://docs.google.com/document/d/1R-Ok9ZWktSU__utMR73H9xzS1Ct9X96kzZcxe7gmPWk/edit"
const SixthLink = "https://docs.google.com/document/d/1H3o_QiTuBwFJjzNtBrOyDmdXPZQVoG3u4e-tPtq8hb0/edit"
const SevenLink = "https://docs.google.com/document/d/1w-ceenLRT2s3QcqjivYXe3eu32cL5ku2UExg_IyN_dg/edit"

function link(i){
    if (i >= 1 && i <= 8) {
            return FirstLink
        } else if(i > 8 && i <= 16) {
            return SecondLink
        } else if( i > 16 && i <=24){
            return ThirdLink
        } else if (i > 24 && i <= 32) {
            return FourthLink
        } else if (i > 33 && i <= 44) {
            return FifthLink
        } else if (i > 44 && i <= 48) {
            return SixthLink
        } else if (i > 48 && i <= 52) {
            return SevenLink
        }
}

const input = document.querySelector('input[name="ques"]')
input.addEventListener('input', async ()=>{
    const value = input.value
    const data = [];
    document.querySelector('.answer').innerHTML = ''

     questions.forEach((elem,j)=>{
        let count = 0;
        for(let i = 0; i < elem.length; i++){
            if(value[i] == elem[i]) count++
            if (count == 4) {
                data.push({elem,j})
                break;
            }
        }
    })

    data.forEach(elem=>{
        const answer = document.createElement('div')
        answer.innerHTML = `<h4><a href="${link(elem.j)}" target="__blank" style="text-decoration:underline">${elem.elem}</a></h4 >`
        document.querySelector('.answer').appendChild(answer)
    })

    console.log(data)
})


// const form = document.querySelector('form')
// form.addEventListener('submit',(e)=>{
// e.preventDefault();

// const val = document.querySelector('input[name="ques"]').value
// let find = false;
// const link = document.querySelector(`.link`);

// questions.forEach((elem,i)=>{
//     console.log(`Вопрос : ${elem}  Номер вопроса : ${i}`)
//     if(val == elem){
//         if(i >= 1 && i <=8){
//             link.innerHTML = `<a href="${FirstLink}"> Ссылка</a>`
//         } else if(i > 8 && i <= 16) {
//             link.innerHTML = `<a href="${SecondLink}"> Ссылка </a>`
//         } else if( i > 16 && i <=24){
//             link.innerHTML = `<a href="${ThirdLink}"> Ссылка </a>`
//         } else if (i > 24 && i <= 32) {
//             link.innerHTML = `<a href="${FourthLink}"> Ссылка </a>`
//         } else if (i > 33 && i <= 44) {
//             link.innerHTML = `<a href="${FifthLink}"> Ссылка </a>`
//         } else if (i > 44 && i <= 48) {
//             link.innerHTML = `<a href="${SixthLink}"> Ссылка </a>`
//         } else if (i > 48 && i <= 52) {
//             link.innerHTML = `<a href="${SevenLink}"> Ссылка </a>`
//         }


//         document.querySelector('.answer').innerHTML = `Номер вопроса : ${i + 1}`;
//         document.querySelector('input=[name="ques"]').value = ''
//         find = true;
//     }
// })
// if(find == false) document.querySelector('.find').innerHTML = `Поиск не дал результатов`
// })
