import data from './MovieData.json';
import { Card } from 'reactstrap';

//Here is my movies page, which displays every movie in Joel's collection by referencing the json
//file provided. I also style it via card to keep it uniform with the rest of the site

const mds = data.MovieData;

const styles = {
  card: {
    backgroundColor: '#0e416c',
    borderRadius: 55,
    padding: '3rem',
    maxWidth: '900px', // Change the maxWidth to your desired value
    margin: '0 auto', // This centers the card horizontally
  },
  table: {
    color: 'white',
  },
};

function MovieList() {
  return (
    <>
      <div>
        <Card m-5 border-0 shadow style={styles.card}>
          <table className="table" style={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {mds.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

export default MovieList;
