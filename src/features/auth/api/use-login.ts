import { useMutation } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";
import {client} from "@/lib/rpc"

type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.login)["$post"]>;

/* use Login is custom hook here */
/* 

without usemutation in JS:
export const useLogin = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (loginData) => {
    setLoading(true);
    setError(null);  // Clear previous errors
    try {
      // Make the API call using the client
      const response = await client.api.auth.login["$post"]({ json: loginData });
      const responseData = await response.json();

      // Update the state with the server response
      setData(responseData);
    } catch (err) {
      // Handle any errors and update the error state
      setError(err);
    } finally {
      // Whether successful or failed, stop the loading state
      setLoading(false);
    }
  };

  return { login, data, error, loading };
}; */
export const useLogin = () =>{
  const mutation = useMutation<ResponseType,Error,RequestType>({
    mutationFn : async ({json})=>{
      const response = await client.api.auth.login['$post']({json});
      return await response.json()
    }
  })
  return mutation;
}