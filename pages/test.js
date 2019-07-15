import { useRouter } from 'next/router';

const Page = props => {
    const router = useRouter();
    const {stars} = props;
    return <div>Next stars: {stars}, query url is {router.query.title}</div>;
  }
  
  Page.getInitialProps = async req => {
    console.log(req);
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  };
  
  export default Page;