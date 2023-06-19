import workInProgress from './assets/wip.jpg'
import './App.css'

function App() {
    return (
        <div    className="container">
            <h1 className="title">Dirty Dogs - Hotel dla Psów </h1>
            <div className="card">
                <a href="https://airtable.com/shrJtGBKt2CepfNyg" target="_blank">
            <img src={workInProgress} className="logo" alt="Pix"/>

            <div>
                    <button className="button">
                        <h2>Zarezerwuj hotel</h2>
                    </button>
            </div>
                </a>
            </div>
        </div>
    )
}

export default App
