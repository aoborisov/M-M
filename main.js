const holdingsListTag = document.querySelector(".holdings");
const holdings = [
  {
    holding: "ЕВРАЗ",
    industry: ["Черная металлургия", "Добывающая промышленность"],
    beneficiaries: [
      {
        surname: "Абрамов",
        name: "Александр",
        middleName: "Григорьевич",
        birthday: ""
      },
      {
        surname: "Фролов",
        name: "Александр",
        middleName: "Владимирович",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "Розбицкий",
        name: "Ростислав",
        middleName: "",
        birthday: "",
        post: ""
      },
      {
        surname: "Ким",
        name: "Дарья",
        middleName: "",
        birthday: "",
        post: ""
      }
    ]
  },

  {
    holding: "Металлоинвест",
    industry: ["Черная металлургия", "Добывающая промышленность"],
    beneficiaries: [
      {
        surname: "Усманов",
        name: "Алишер",
        middleName: "Бурханович",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "Варичев",
        name: "Андрей",
        middleName: "Владимирович",
        birthday: "",
        post: "Генеральный директор"
      },
      {
        surname: "Воронов",
        name: "Алексей",
        middleName: "Борисович",
        birthday: "",
        post: "Финансовый директор"
      },
      {
        surname: "Краснов",
        name: "Илья",
        middleName: "Владимирович",
        birthday: "",
        post: "Директор департамента корпоративного финансирования"
      },
      {
        surname: "Горшкова",
        name: "Марина",
        middleName: "Александровна",
        birthday: "",
        post: "Руководитель казначейства"
      }
    ]
  },

  {
    holding: "Мечел",
    industry: ["Черная металлургия", "Добывающая промышленность"],
    beneficiaries: [
      {
        surname: "Зюзин",
        name: "Игорь",
        middleName: "Владимирович",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "Коржов",
        name: "Олег",
        middleName: "Викторович",
        birthday: "",
        post: "Директор Холдинга"
      },
      {
        surname: "Галеева",
        name: "Нелли",
        middleName: "Рафаиловна",
        birthday: "",
        post: "Финансовый директор"
      },
      {
        surname: "Овчинников",
        name: "Александр",
        middleName: "",
        birthday: "",
        post: "Начальник департамента финансов"
      }
    ]
  },

  {
    holding: "НЛМК",
    industry: [""],
    beneficiaries: [
      {
        surname: "Лисин",
        name: "Владимир",
        middleName: "Сергеевич",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "Федоришин",
        name: "Григорий",
        middleName: "Витальевич",
        birthday: "",
        post: "Президент, Председатель Правления"
      },
      {
        surname: "Дубовицкая",
        middleName: "Татьяна",
        name: "",
        birthday: "",
        post: "Руководитель казначейства"
      }
    ]
  },

  {
    holding: "Норильский Никель",
    industry: ["Цветная металлургия"],
    beneficiaries: [
      {
        surname: "Потанин",
        name: "Владимир",
        middleName: "Олегович",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "Гаврилов",
        name: "Александр",
        middleName: "Владимирович",
        birthday: "",
        post: "Директор казначейства"
      }
    ]
  },

  {
    holding: "",
    industry: [""],
    beneficiaries: [
      {
        surname: "",
        name: "",
        middleName: "",
        birthday: ""
      }
    ],
    managers: [
      {
        surname: "",
        name: "",
        middleName: "",
        birthday: "",
        post: ""
      }
    ]
  }
];

function renderHoldings() {
  //Рендер холдингов
  for (let i1 = 0; i1 < holdings.length; i1++) {
    holdingsListTag.insertAdjacentHTML(
      "beforeend",
      `
		<div class="holding">
			<p class="holding-name">
			${holdings[i1].holding}
			</p>
		</div>`
    );
    //Рендер бенефициароы
    for (let i2 = 0; i2 < holdings[i1].beneficiaries.length; i2++) {
			
			if (i2 === 0) {
        holdingsListTag.querySelector("div:last-of-type").insertAdjacentHTML(
          "beforeend",
          `
				<p>Бенефициары:</p>
				<ul></ul>
				`
        );
      }

      holdingsListTag
        .querySelector("div:last-of-type>ul:last-of-type")
        .insertAdjacentHTML(
          "beforeend",
          `
				<li>${holdings[i1].beneficiaries[i2].surname} ${holdings[i1].beneficiaries[i2].name}</li>
				`
        );
    }

    //Рендер менеджмента
    for (let i3 = 0; i3 < holdings[i1].managers.length; i3++) {
      if (i3 === 0) {
        holdingsListTag.querySelector("div:last-of-type").insertAdjacentHTML(
          "beforeend",
          `
				<p>Менеджмент:</p>
				<ul></ul>
				`
        );
      }
      holdingsListTag
        .querySelector("div:last-of-type>ul:last-of-type")
        .insertAdjacentHTML(
          "beforeend",
          `
				<li>${holdings[i1].managers[i3].surname} ${holdings[i1].managers[i3].name}</li>
				`
        );
    }
  }
}

renderHoldings();
