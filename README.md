# Oassis (Operation assistant System)

---

> ## Dependency List

1. react-router-dom
2. fontAwesomeIcon
3. AG-Grid (Grid)

---

> ## fontAwesomeIcon

- react fontawesome usage (https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- icon (https://fontawesome.com/icons?d=gallery&p=2)

---

> ## AG GRID

- AG Grid
- npm install --save ag-grid-enterprise
- AG Grid (https://www.ag-grid.com/)

---

> ## Grid Example
>
> > Ref를 얻어옴

```js
const AgGrid = createRef();
```

> > 행 추가

```js
AgGrid.current.api.applyTransaction({ add: [{}] });
```

> > 행 전체선택

```js
AgGrid.current.api.selectAll();
```

> > 체크된 행 추출

```js
AgGrid.current.api.getSelectedRows();
```

---
