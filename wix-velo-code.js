import wixData from 'wix-data';

let slots = Array(20).fill(false);
const nombre = "Toni Criado";
const numeroSocio = "GA-2024-1587";

$w.onReady(function () {
    // Inicializar datos
    $w('#textNombre').text = nombre;
    $w('#textCodigo').text = numeroSocio;
    actualizarContador();
    
    // Configurar repeater con 20 slots
    const slotsData = Array.from({length: 20}, (_, i) => ({
        _id: String(i),
        index: i,
        sellado: false
    }));
    
    $w('#repeaterSlots').data = slotsData;
    
    // Ocultar combo gratis al inicio
    $w('#boxComboGratis').hide();
    $w('#boxNombreSocio').show();
    
    // Configurar eventos del repeater
    $w('#repeaterSlots').onItemReady(($item, itemData, index) => {
        // Aplicar estilo inicial
        aplicarEstiloSlot($item, slots[index]);
        
        // Click en cada slot
        $item('#boxSlot').onClick(() => {
            slots[index] = !slots[index];
            aplicarEstiloSlot($item, slots[index]);
            actualizarContador();
            verificarComplecion();
        });
    });
});

function aplicarEstiloSlot($item, sellado) {
    const box = $item('#boxSlot');
    const check = $item('#textCheck');
    
    if (sellado) {
        box.style.backgroundColor = '#7C3AED';
        box.style.borderColor = '#6D28D9';
        box.style.borderWidth = '4px';
        check.text = '✓';
        check.show();
    } else {
        box.style.backgroundColor = '#FDE047';
        box.style.borderColor = '#06B6D4';
        box.style.borderWidth = '4px';
        check.hide();
    }
}

function actualizarContador() {
    const sellados = slots.filter(s => s).length;
    $w('#textContador').text = `${sellados} / 20`;
}

function verificarComplecion() {
    const sellados = slots.filter(s => s).length;
    
    if (sellados === 20) {
        // Mostrar combo gratis con animación
        $w('#boxNombreSocio').hide();
        $w('#boxComboGratis').show('fade', {duration: 500});
    } else {
        // Mostrar nombre del socio
        $w('#boxComboGratis').hide();
        $w('#boxNombreSocio').show();
    }
}

// Función opcional para resetear la tarjeta
export function resetearTarjeta() {
    slots = Array(20).fill(false);
    
    $w('#repeaterSlots').forEachItem(($item, itemData, index) => {
        aplicarEstiloSlot($item, false);
    });
    
    actualizarContador();
    verificarComplecion();
}
