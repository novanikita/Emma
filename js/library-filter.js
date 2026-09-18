// Фильтр таблицы библиотеки по тегу. Кнопки собираются из самой таблицы
// (колонка «Тег», теги через запятую), поэтому новые карточки попадают в фильтр
// сами. Выбранный тег хранится в адресе (?tag=…), чтобы отфильтрованной
// таблицей можно было поделиться ссылкой.
(function () {
  const table = document.querySelector(".library-table");
  const filter = document.querySelector(".library-filter");
  if (!table || !filter) return;

  const TAG_COLUMN = 2;
  const allLabel = document.documentElement.lang === "en" ? "All" : "Все";

  const rows = Array.from(table.tBodies[0].rows).map((row) => ({
    row,
    tags: row.cells[TAG_COLUMN].textContent
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
  }));

  const counts = new Map();
  for (const { tags } of rows) {
    for (const tag of tags) counts.set(tag, (counts.get(tag) || 0) + 1);
  }
  const tags = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a));

  const buttons = new Map();
  let current = "";

  function addButton(tag, label, count) {
    const button = document.createElement("button");
    button.type = "button";
    button.append(label);
    const number = document.createElement("span");
    number.className = "library-filter__count";
    number.textContent = count;
    button.append(number);
    // Повторное нажатие на выбранный тег снимает фильтр.
    button.addEventListener("click", () => select(tag === current ? "" : tag));
    filter.append(button);
    buttons.set(tag, button);
  }

  function select(tag, updateUrl = true) {
    current = counts.has(tag) ? tag : "";
    for (const { row, tags: rowTags } of rows) {
      row.hidden = current !== "" && !rowTags.includes(current);
    }
    for (const [buttonTag, button] of buttons) {
      button.setAttribute("aria-pressed", String(buttonTag === current));
    }
    if (updateUrl) {
      const url = new URL(location.href);
      if (current) url.searchParams.set("tag", current);
      else url.searchParams.delete("tag");
      history.replaceState(null, "", url);
    }
  }

  addButton("", allLabel, rows.length);
  for (const tag of tags) addButton(tag, tag, counts.get(tag));

  select(new URLSearchParams(location.search).get("tag") || "", false);
})();
