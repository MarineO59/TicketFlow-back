// Mock de socket.ts pour les tests Jest
// getIO() retourne un objet factice qui ne fait rien

const mockEmit = jest.fn();
const mockTo = jest.fn(() => ({ emit: mockEmit }));

export const getIO = jest.fn(() => ({
	to: mockTo,
}));

export const initSocket = jest.fn();
