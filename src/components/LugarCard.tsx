import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Lugar } from '../types/lugar';

interface LugarCardProps {
    lugar: Lugar;
    alVerDetalle: () => void;
    alEliminar: () => void;
}

export const LugarCard: React.FC<LugarCardProps> = ({ lugar, alVerDetalle, alEliminar }) => {
    return (
        <View style={estilos.tarjeta}>
            {lugar.imagen && (
                <Image source={{ uri: lugar.imagen }} style={estilos.imagen} />
            )}
            <View style={estilos.contenido}>
                <View style={estilos.filaCabecera}>
                    <Text style={estilos.titulo} numberOfLines={1}>
                        {lugar.nombre}
                    </Text>
                    <View style={estilos.badge}>
                        <Text style={estilos.textoBadge}>
                            {lugar.categoria}
                        </Text>
                    </View>
                </View>

                <View style={estilos.filaDetalle}>
                    <Feather name="map-pin" size={14} color="#64748B" />
                    <Text style={estilos.subtitulo}>Ciudad: {lugar.ciudad}</Text>
                </View>

                <View style={estilos.contenedorBotones}>
                    <TouchableOpacity 
                        style={[estilos.boton, estilos.botonDetalle]} 
                        onPress={alVerDetalle}
                        activeOpacity={0.8}
                    >
                        <Feather name="eye" size={14} color="#fff" style={estilos.iconoBoton} />
                        <Text style={estilos.textoBotonDetalle}>Ver Detalle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[estilos.boton, estilos.botonEliminar]} 
                        onPress={alEliminar}
                        activeOpacity={0.8}
                    >
                        <Feather name="trash-2" size={14} color="#EF4444" style={estilos.iconoBoton} />
                        <Text style={estilos.textoBotonEliminar}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        overflow: 'hidden',
        elevation: 3, 
        shadowColor: '#0F172A', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
    },
    imagen: {
        width: '100%',
        height: 180,
        backgroundColor: '#F1F5F9',
    },
    contenido: {
        padding: 16,
    },
    filaCabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0F172A',
        flex: 1,
        marginRight: 8,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        backgroundColor: '#F0FDFA',
    },
    textoBadge: {
        fontSize: 11,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#0F766E',
    },
    filaDetalle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        gap: 4,
    },
    subtitulo: {
        fontSize: 14,
        color: '#64748B',
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        gap: 10,
    },
    boton: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    botonDetalle: {
        backgroundColor: '#0D9488',
    },
    botonEliminar: {
        backgroundColor: '#FEF2F2',
        borderColor: '#FEE2E2',
    },
    iconoBoton: {
        marginRight: 6,
    },
    textoBotonDetalle: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    },
    textoBotonEliminar: {
        color: '#EF4444',
        fontWeight: '600',
        fontSize: 14,
    },
});