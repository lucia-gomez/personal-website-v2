import { useCallback, useMemo, useState } from "react"

import { IconButton } from "../iconButton"
import Pagination from "react-bootstrap/Pagination"
import Subsection from "../layout/subsection"
import Table from "react-bootstrap/Table"
import styled from "styled-components"

const SubsectionWrapper = styled(Subsection)`
  padding: 0;
  padding-top: 20px;

  h3 {
    font-family: "Nanum Gothic";
    font-size: 20px;
  }
`

const TableWrapper = styled(Table)`
  color: ${props => props.theme.text};
  margin-bottom: 0;

  th,
  td {
    border: none;
  }

  tr {
    height: 48px;
  }

  thead th {
    border: none;
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${props => props.theme.medium};
  }

  tbody tr:hover {
    color: ${props => props.theme.accent};
  }
`

const PaginationWrapper = styled(Pagination)`
  .page-link {
    background-color: ${props => props.theme.accentLight};
    color: ${props => props.theme.text};
    border: none;
    width: 28px;

    :focus {
      box-shadow: none;
    }

    :hover {
      z-index: unset;
    }
  }

  .page-item.active .page-link {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.text};
    z-index: unset;
  }
`

const NUM_ROWS = 5

export default function SubscriberList(props) {
  const { label, data, refresh } = props
  const [paginationActive, setPaginationActive] = useState(1)

  const formatDate = dateAdded => {
    const date = new Date(dateAdded)
    return date.toLocaleString()
  }

  const maxPages = useMemo(
    () => Math.ceil((data?.length ?? 0) / NUM_ROWS),
    [data]
  )

  const getPages = useCallback(
    () =>
      Array.from(Array(maxPages)).map((_, idx) => (
        <Pagination.Item
          key={idx + 1}
          active={idx + 1 === paginationActive}
          onClick={() => setPaginationActive(idx + 1)}
        >
          {idx + 1}
        </Pagination.Item>
      )),
    [maxPages, paginationActive]
  )

  const getPaginationArrow = useCallback(
    (label, onClick) => (
      <li className="page-item" onClick={onClick}>
        <div className="page-link" role="button">
          <span>{label}</span>
        </div>
      </li>
    ),
    []
  )

  const getItems = useCallback(() => {
    const start = (paginationActive - 1) * NUM_ROWS
    const end = paginationActive * NUM_ROWS
    const rows = []
    for (let i = start; i < end; i++) {
      const row = data[i]
      rows.push(
        <tr key={i}>
          <td>{i < data.length ? row.id : ""}</td>
          <td>{i < data.length ? row.email : ""}</td>
          <td>{i < data.length ? formatDate(row.dateAdded) : ""}</td>
          <td />
        </tr>
      )
    }
    return rows
  }, [data, paginationActive])

  return data != null ? (
    <SubsectionWrapper openByDefault={false} title={label}>
      <div style={{ overflowX: "scroll" }}>
        <TableWrapper striped hover>
          <thead>
            <tr>
              <th>
                <b>ID</b>
              </th>
              <th>
                <b>Email</b>
              </th>
              <th>
                <b>Date Added</b>
              </th>
              <th>
                <IconButton className="fas fa-rotate-right" onClick={refresh} />
              </th>
            </tr>
          </thead>
          <tbody>{getItems()}</tbody>
        </TableWrapper>
      </div>
      {data.length > NUM_ROWS && (
        <PaginationWrapper size="sm">
          {getPaginationArrow("<", () => setPaginationActive(1))}
          {getPages()}
          {getPaginationArrow(">", () => setPaginationActive(maxPages))}
        </PaginationWrapper>
      )}
    </SubsectionWrapper>
  ) : (
    <div />
  )
}
