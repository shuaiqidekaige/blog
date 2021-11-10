export interface Menu {
  level: string
  text: string
  id: string | null
  children: Array<Menu>
}
