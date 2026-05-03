import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";
 
export const metadata = {
  title: '404 || error - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}


const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;