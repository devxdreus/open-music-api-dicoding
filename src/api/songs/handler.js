class SongsHandler {
    constructor(service) {
        this._service = service;
    }

    async postSongHandler(request, h) {
        const songId = await this._service.addSong(request.payload);

        const response = h.response({
            status: 'success',
            data: {
                song_id: songId,
            },
        });

        response.code(201);
        return response;
    }

    async getSongByIdHandler(request) {
        const { id } = request.params;

        const songs = await this._service.getSongById(id);

        return {
            status: 'success',
            data: {
                songs,
            },
        };
    }

    async putSongByIdHandler(request) {
        const { id } = request.params;

        await this._service.editSongById(id, request.payload);

        return {
            status: 'success',
            message: 'Lagu berhasil diperbarui',
        };
    }

    async deleteSongByIdHandler(request) {
        const { id } = request.params;

        await this._service.deleteSongById(id);

        return {
            status: 'success',
            message: 'Lagu berhasil dihapus',
        };
    }
}

module.exports = SongsHandler;
