import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Reviews from "./components/reviews";
import ShowReview from "./components/review-show";
import EditReview from "./components/review-edit";
import CreateReview from "./components/review-create";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container h-100 mb-auto mt-3">
        <Route path="/" exact component={Reviews} />
        <Route path="/review-edit/:id" component={EditReview} />
        <Route path="/review-show/:id" component={ShowReview} />
        <Route path="/review-add" component={CreateReview} />
        <Route path="/register" component={Register} />
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
