import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLugares } from './_layout';

export default function NuevoLugarPantalla () {
    const { agregarLugar } = useLugares();
    const router = useRouter();

    const [nombre, setNombre] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');

    const manejarGuardar = () => {
        if (!nombre.trim() || !ciudad.trim() || !categoria.trim() || !descripcion.trim()) {
            Alert.alert('Campos Incompletos', 'Debe completar todos los campos.');
            return;
        }

        agregarLugar({
            nombre: nombre.trim(),
            ciudad: ciudad.trim(),
            categoria: categoria.trim(),
            descripcion: descripcion.trim(),
            imagen: imagen.trim() ? imagen.trim() : undefined,
        });

        Alert.alert('Éxito', 'Lugar registrado correctamente.', [
            { text: 'OK', onPress: () => router.back() }
        ]);
    };

    return (
        <ScrollView 
            contentContainerStyle={estilos.contenedor}
            keyboardShouldPersistTaps="handled"
        >
            <View style={estilos.tarjetaFormulario}>
                <Text style={estilos.etiqueta}>Nombre del lugar *</Text>
                <TextInput 
                    style={estilos.entrada} 
                    value={nombre} 
                    onChangeText={setNombre} 
                    placeholder="Ej. Quilotoa" 
                    placeholderTextColor="#94A3B8"
                />

                <Text style={estilos.etiqueta}>Ciudad *</Text>
                <TextInput 
                    style={estilos.entrada} 
                    value={ciudad} 
                    onChangeText={setCiudad} 
                    placeholder="Ej. Pujilí" 
                    placeholderTextColor="#94A3B8"
                />

                <Text style={estilos.etiqueta}>Categoría *</Text>
                <TextInput 
                    style={estilos.entrada} 
                    value={categoria} 
                    onChangeText={setCategoria} 
                    placeholder="Ej. Naturaleza, Cultura, Aventura" 
                    placeholderTextColor="#94A3B8"
                />

                <Text style={estilos.etiqueta}>Descripción corta *</Text>
                <TextInput
                    style={[estilos.entrada, estilos.areaTexto]}
                    value={descripcion}
                    onChangeText={setDescripcion}
                    placeholder="Escribe una breve reseña..."
                    placeholderTextColor="#94A3B8"
                    multiline
                    numberOfLines={3}
                />

                <Text style={estilos.etiqueta}>URL de la Imagen (Opcional)</Text>
                <TextInput 
                    style={estilos.entrada} 
                    value={imagen} 
                    onChangeText={setImagen} 
                    placeholder="https://ejemplo.com/imagen.jpg" 
                    placeholderTextColor="#94A3B8"
                    keyboardType="url" 
                    autoCapitalize="none"
                />

                <TouchableOpacity 
                    style={estilos.botonGuardar} 
                    onPress={manejarGuardar}
                    activeOpacity={0.8}
                >
                    <Feather name="check" size={18} color="#fff" style={estilos.iconoBoton} />
                    <Text style={estilos.textoBotonGuardar}>Guardar Lugar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        padding: 16,
        backgroundColor: '#F8FAFC',
        flexGrow: 1,
    },
    tarjetaFormulario: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    etiqueta: {
        fontSize: 14,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 6,
        marginTop: 12,
    },
    entrada: {
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
    },
    areaTexto: {
        height: 80,
        textAlignVertical: 'top',
    },
    botonGuardar: {
        flexDirection: 'row',
        backgroundColor: '#0D9488',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        shadowColor: '#0D9488',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    iconoBoton: {
        marginRight: 6,
    },
    textoBotonGuardar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});