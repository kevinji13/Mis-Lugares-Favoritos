import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LugarCard } from '../src/components/LugarCard';
import { useLugares } from './_layout';

export default function ListadoPantalla() {
  const { lugares, eliminarLugar } = useLugares();
  const router = useRouter();

  const manejarEliminar = (id: number, nombre: string) => {
    Alert.alert(
      'Confirmar eliminación',
      `¿Está seguro de que desea eliminar "${nombre}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive', 
          onPress: () => eliminarLugar(id) 
        },
      ]
    );
  };

  return (
    <SafeAreaView style={estilos.contenedor} edges={['top', 'left', 'right']}>
      <View style={estilos.cabecera}>
        <View style={estilos.cabeceraTexto}>
          <Text style={estilos.encabezado}>MIS LUGARES FAVORITOS</Text>
        </View>
        <View style={estilos.iconoContenedor}>
          <Feather name="map" size={20} color="#0D9488" />
        </View>
      </View>
      
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LugarCard
            lugar={item}
            alVerDetalle={() => router.push({ pathname: '/detalle', params: { id: item.id } })}
            alEliminar={() => manejarEliminar(item.id, item.nombre)}
          />
        )}
        contentContainerStyle={estilos.listaContenedor}
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>No hay lugares registrados aún.</Text>
        }
      />

      <TouchableOpacity 
        style={estilos.botonFlotante} 
        onPress={() => router.push('/nuevo')}
        activeOpacity={0.8}
      >
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  cabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  cabeceraTexto: {
    flex: 1,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  iconoContenedor: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0FDFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  listaContenedor: {
    paddingVertical: 10,
    paddingBottom: 90,
  },
  textoVacio: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 60,
    fontSize: 16,
  },
  botonFlotante: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    backgroundColor: '#0D9488',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});