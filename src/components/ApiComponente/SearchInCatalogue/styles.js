import { StyleSheet } from 'react-native';
import colors from '../../../constantes/colors';

const styles = StyleSheet.create({
  // BARRA DE BUSCAR Y BOTON
  container:{
    backgroundColor: colors.backgroundPrimary,
    width: "100%",
    height: "100%",
  },
  content:{
    backgroundColor: colors.backgroundPrimary,
  },
  searchContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    
  },
  searchInput: {
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 10,
    padding: 10,
    width: "80%",
    margin:10,
    fontSize: 16,
    color: colors.textSecondary,
    backgroundColor: colors.backgroundTerciary,
    fontWeight: 'bold',

  },

  // LISTA DE RESULTADO DE BUSQUEDA
  movieContainer: {
    marginTop: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",

    
  },
  moviePoster: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  movieOverview: {
    marginBottom: 5,
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'hidden',
    textAlign: 'justify',
    lineHeight: 18,
    fontSize: 14,
    color: '#666666',
    numberOfLines: 3,
    ellipsizeMode: 'tail',
  },
  movieGenres: {
    fontStyle: "italic",
    marginBottom: 5,
  },
  movieVote: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#0099ff",
  },
});



export default styles;
