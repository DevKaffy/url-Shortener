import { useEffect, useState } from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
import './LinkResult.css'
import axios from 'axios'
const LinkResult = ({inputValue}:{inputValue: any;}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios(
          "https://api.shrtco.de/v2/shorten?url=${inputValue}");
          setShortenLink(res.data.result.full_short_link)
        } catch(err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
      
      useEffect(() => {
        if (inputValue.length){
          fetchData();
        }
      }, [inputValue]);
      useEffect(() => {
        const timer = setTimeout(() =>{
          setCopied(false)
        }, 1000);
        return () => clearTimeout(timer)
      }, [copied])
    if (loading){
      return <p className='no-data'>Loading...</p>
    }
    if (error) {
      return <p className="no-data">Something went wrong</p>;
    }
    
      return (
        <>
        {shortenLink && (
        <div className='result'>
        <p>{shortenLink}</p>
        <CopyToClipboard 
        text={shortenLink}
        onCopy={() => setCopied(true)}
        >
        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
        </CopyToClipboard>
        </div>
        )}
        </>
  )
}

export default LinkResult