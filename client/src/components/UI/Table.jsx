function Table() {
  return (
    <table className={"table"}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Телефон</th>
          <th scope="col">Должность</th>
          <th scope="col">Дирекция</th>
          <th scope="col">Трудовые отношения</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>Зайков</td>
          <td>Михаил</td>
          <td>Николаевич</td>
          <td>+375297739600</td>
          <td>Ведущий инженер по ТВ оборудованию</td>
          <td>Дирекция технического обеспечения</td>
          <td>Штатный сотрудник</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">99</td>
          <td>Зайкова</td>
          <td>Ольга</td>
          <td>Борисовна</td>
          <td>+375297025869</td>
          <td>Кладовщик</td>
          <td>Дирекция технического обеспечения</td>
          <td>Штатный сотрудник</td>
          <td></td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default Table;
