import logo from './logo.svg';
import './App.css';
import Hero from './heroes';

const heroes= [
  {name: "Бэтмен", universe: "DC Comics", alter: "Брюс Уэйн", job: "борец с преступностью, филантроп, миллиардер", friends:"Робин, Бэтгерл", power:"интеллект, обширные познания, знания боевых искусств, ловкость", url:"https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"},
  {name: "Супермен", universe: "DC Comics", alter: "Кларк Кент", job: "борец за справедливость", friends: "собака Крипто", power:"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм", url: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"},
  {name: "Железный человек", universe: "Marvel Comics", alter: "Тони Старк", job: "гений, миллиардер, плейбой, филантроп", friends: "Мстители", power:"высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы", url:"https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"},
  {name: "Человек-паук", universe: "Marvel Comics", alter: "Питер Паркер", job: "борец за справедливость, студент, фотограф", friends: "Мстители, Фантастическая четверка, Люди Икс", power:"сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины", url:"https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"},
  {name: "Капитан Америка", universe: "Marvel Comics", alter: "Стивен Роджерс", job: "супер-солдат", friends: "Мстители", power:"сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя", url:"https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"},
  {name: "Тор", universe: "Marvel Comics", alter: "нет; полное имя — Тор Одинсон", job: "борец за справедливость, скандинавский бог", friends: "Мстители", power:"все, что может бог, плюс молот Мьелнир", url:"https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"},

]

function App() {
  return (
    <div className="App">
     {
     heroes.map((hero)=>
     <Hero name={hero.name} universe={hero.universe} alter={hero.universe} job={hero.job} friends={hero.friends} power={hero.power} url={hero.url}></Hero>
     )
     }
    </div>
  );
}

export default App;
