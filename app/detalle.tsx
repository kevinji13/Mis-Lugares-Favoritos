import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLugares } from './_layout';

export default function DetalleLugarPantalla() {
    const { id } = useLocalSearchParams();
    const { lugares } = useLugares();

    const lugar = lugares.find((item) => item.id === Number(id));

    if (!lugar) {
        return (
            <View style={estilos.centrado}>
                <Feather name="alert-triangle" size={48} color="#EF4444" />
                <Text style={estilos.textoError}>Lugar no encontrado.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.scrollContenido}>
            {lugar.imagen ? (
                <Image source={{ uri: lugar.imagen }} style={estilos.imagen} />
            ) : (
                <View style={estilos.contenedorSinImagen}>
                    <Feather name="image" size={48} color="#94A3B8" />
                    <Text style={estilos.textoSinImagen}>Sin imagen disponible</Text>
                </View>
            )}

            <View style={estilos.contenedorInfo}>
                <View style={estilos.filaCabecera}>
                    <Text style={estilos.titulo}>{lugar.nombre}</Text>
                    <View style={estilos.insignia}>
                        <Text style={estilos.textoInsignia}>
                            {lugar.categoria}
                        </Text>
                    </View>
                </View>

                <View style={estilos.fila}>
                    <Feather name="map-pin" size={16} color="#0D9488" style={estilos.iconoFila} />
                    <Text style={estiquetaStyle.etiqueta}>Ciudad:</Text>
                    <Text style={estilos.valor}> {lugar.ciudad}</Text>
                </View>

                <View style={estilos.seccionDescripcion}>
                    <Text style={estilos.tituloSeccion}>Descripción del lugar</Text>
                    <Text style={estilos.descripcion}>{lugar.descripcion}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const estiquetaStyle = {
    etiqueta: {
        fontSize: 15,
        fontWeight: '700' as const,
        color: '#475569',
    }
};

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollContenido: {
        paddingBottom: 40,
    },
    centrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        padding: 20,
        gap: 12,
    },
    imagen: {
        width: '100%',
        height: 280,
        backgroundColor: '#E2E8F0',
    },
    contenedorSinImagen: {
        width: '100%',
        height: 200,
        backgroundColor: '#E2E8F0',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    textoSinImagen: {
        color: '#64748B',
        fontSize: 14,
        fontWeight: '500',
    },
    contenedorInfo: {
        padding: 20,
        marginTop: -20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: '#F8FAFC',
    },
    filaCabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
        flexWrap: 'wrap',
        gap: 8,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0F172A',
        flex: 1,
        minWidth: 150,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 12,
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
        elevation: 1,
    },
    iconoFila: {
        marginRight: 8,
    },
    valor: {
        fontSize: 15,
        color: '#0F172A',
        fontWeight: '500',
    },
    insignia: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        alignSelf: 'flex-start',
        backgroundColor: '#F0FDFA',
    },
    textoInsignia: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#0F766E',
    },
    seccionDescripcion: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 18,
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
        marginTop: 8,
    },
    tituloSeccion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
        paddingBottom: 6,
    },
    descripcion: {
        fontSize: 15,
        lineHeight: 22,
        color: '#475569',
    },
    textoError: {
        fontSize: 16,
        color: '#EF4444',
        fontWeight: '600',
    },
});