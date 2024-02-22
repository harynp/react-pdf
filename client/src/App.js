import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <PDFViewer height={500} width={300}>
          <PDFFile />
        </PDFViewer>
        <PDFDownloadLink document={<PDFFile />} fileName="FORM">
          {({loading}) => (loading ? <button>Loading ...</button> :<button>Download</button>)}  
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;