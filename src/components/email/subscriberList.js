import { IconButton } from "../iconButton"
import Subsection from "../layout/subsection"
import Table from "react-bootstrap/Table"
import styled from "styled-components"

const SubsectionWrapper = styled(Subsection)`
  padding: 0;
  padding-top: 12px;

  h3 {
    font-family: "Nanum Gothic";
    font-size: 20px;
  }
`

const TableWrapper = styled(Table)`
  color: ${props => props.theme.text};

  th,
  td {
    border: none;
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

export default function SubscriberList(props) {
  const { label, data, refresh } = props

  const formatDate = dateAdded => {
    const date = new Date(dateAdded)
    console.log(dateAdded, date)
    date.setUTCHours(date.getUTCHours() - 7)
    return date.toLocaleString()
  }

  console.log(data)

  return data != null ? (
    <SubsectionWrapper openByDefault={true} title={label}>
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
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.email}</td>
              <td>{formatDate(row.dateAdded)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </SubsectionWrapper>
  ) : (
    <div />
  )
}
