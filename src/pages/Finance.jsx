import {React} from 'react'
import {useState} from 'react'
import {Form,Button, FormGroup} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'
function Finance (){
  const [source, setSource] = useState();
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const [currency, setCurrency] = useState();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
const navigate=useNavigate();
  const handlenext = ()=>{
    try {
      const response = axios.post(`${BASE_URL}/Finance`,{
        source,
        income,
        expenses,
        currency,
      });
      console.log(response.data);
      navigate ("/Security")

    } catch (error) {
      console.log(error)
    }
  }
    return(
        <>
        <h1 className="text-white text-center">Finance Profile</h1>
        <h2 className="text-white text-center mt-5" >Personal Finance Information</h2>
          <Form>
            <Form.Group controlId="formBasicSource" className="mt-3" >
              <Form.Label className="text-white">Primary Source of Income</Form.Label>
              <Form.Control type="text"  name="Source" placeholder="Salary,Business,Investments,etc." onChange={(e) => setSource(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formBasicIncome" className="mt-3">
            <Form.Label className="text-white">Monthly Income Range</Form.Label>
            <Form.Select name="income" className="text-white bg-dark" onChange={(e) => setIncome(e.target.value)} required>
                <option value="" className="text-ligth">Select</option>
                <option value="<10000" className="text-ligth">Less than 10,000</option>
                <option value="10000-50000" className="text-ligth">10,000 - 50,000</option>
                <option value="50000-100000" className="text-ligth">50,000 - 1,00,000</option>
                <option value=">100000" className="text-ligth">More than 1,00,000</option>
            </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicExpenses" className="mt-3">
            <Form.Label className="text-white">Primary Expense Categories</Form.Label>
            <div className="checkbox-group">
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Housing</span>} 
                name="expenses" 
                onChange={(e) => setExpenses(e.target.value)}
                value="housing" 
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Food & Groceries</span>} 
                name="expenses" 
                value="food" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Transportation</span>} 
                name="expenses" 
                value="transportation" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Healthcare</span>} 
                name="expenses" 
                value="healthcare" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Entertainment</span>} 
                name="expenses" 
                value="entertainment" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Education</span>} 
                name="expenses" 
                value="education" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Savings & Investments</span>} 
                name="expenses" 
                value="savings" 
                onChange={(e) => setExpenses(e.target.value)}
                />
                <Form.Check 
                type="checkbox" 
                label={<span className="text-white">Others</span>} 
                name="expenses" 
                value="others" 
                onChange={(e) => setExpenses(e.target.value)}
                />
            </div>
            </Form.Group>
            <Form.Group controlId="formBasicCurrency" className="mt-3">
            <Form.Label className="text-white">Preferred Currency</Form.Label>
            <Form.Select name="currency" className="currency-select"  onChange={(e) => setCurrency(e.target.value)} required>
                <option value="">Select Currency</option>
                <option value="INR">🇮🇳 Indian Rupee (INR)</option>
                <option value="USD">🇺🇸 US Dollar (USD)</option>
                <option value="EUR">🇪🇺 Euro (EUR)</option>
                <option value="GBP">🇬🇧 British Pound (GBP)</option>
                <option value="JPY">🇯🇵 Japanese Yen (JPY)</option>
                <option value="CNY">🇨🇳 Chinese Yuan (CNY)</option>
                <option value="AUD">🇦🇺 Australian Dollar (AUD)</option>
                <option value="CAD">🇨🇦 Canadian Dollar (CAD)</option>
                <option value="SGD">🇸🇬 Singapore Dollar (SGD)</option>
                <option value="AED">🇦🇪 UAE Dirham (AED)</option>
            </Form.Select>
            </Form.Group>
            <Button
                  type="submit"
                  className=" text-center mt-3 btnStyle" 
                > Submit
                </Button>


        </Form>
        </>
    )
}
export default Finance