import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const NotFound = () => {
    return (
        <Container>
            <div className="flex flex-col h-screen justify-center items-center mx-auto">
                <h3>404 This page not found</h3>
                <div className="mt-2">
                    <Link className="px-4 py-2 bg-purple-600 shadow rounded-lg focus:ring-2 focus:ring-purple-200 text-white" to="/">Go Back to Home</Link>
                </div>
            </div>
        </Container>
    );
}

export default NotFound;
