import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders();


//Add a click event listener that presents an alert box showing how many products an employee has sold when their name is clicked

document.addEventListener (
    "click",
    (clickEvent) => {
        const newClick = clickEvent.target;
        if (newClick.id.startsWith('employee')) {
            const [,newPK] = newClick.id.split('--');
            let matchEmployee = ''
            for (const employee of employees) {
                if (employee.id === parseInt(newPK)){
                    matchEmployee = employee;
                }
            }
            let matchCount = 0
            for (const order of orders) {
                if (matchEmployee.id === order.employeeId) {
                    matchCount++
                }
            }
        window.alert(`${matchEmployee.name} sold ${matchCount} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

