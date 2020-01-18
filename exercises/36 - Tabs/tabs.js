console.log('ya ya wes we get it.. IT WORKS!')

const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role = "tab"]')
const tabPanels = tabs.querySelectorAll('[role = "tabpanel"]')

const handleTabClick = e => {
  tabButtons.forEach(button => {
    button.setAttribute('aria-selected', false)
  })

  tabPanels.forEach(panel => {
    panel.hidden = true
  })

  const selectedTab = e.currentTarget
  selectedTab.setAttribute('aria-selected', true)

  const tabPanelToShow = tabs.querySelector(
    `[aria-labelledby = ${selectedTab.id}]`
  )
  tabPanelToShow.hidden = false
}
tabButtons.forEach(button => {
  button.addEventListener('click', handleTabClick)
})
