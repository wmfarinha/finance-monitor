import { useState, useEffect } from "react"

import { Container, Header, HeaderText, Body } from "./App.styles"
import { TableArea } from "./components/TableArea"

import { Category } from "./types/Category"
import { Item } from "./types/Item"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"


const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>

      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        {/* Area de informações */}

        {/* Area de inputs */}

        {/* Lista de itens */}
        <TableArea list={filteredList} />
      </Body>

    </Container>
  );
}

export default App