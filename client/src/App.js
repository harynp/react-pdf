import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        {({loading}) => (loading ? <button>Loading ...</button> :<button>Download</button>)}  
      </PDFDownloadLink>
    </div>
  );
}

export default App;