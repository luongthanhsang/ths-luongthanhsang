import asyncio, edge_tts

async def main():
    try:
        voices = await edge_tts.list_voices()
        vn = [v for v in voices if 'vi-VN' in v['Locale']]
        print(f"Vietnamese voices ({len(vn)}):")
        for v in vn:
            print(v['ShortName'], v['Gender'])
    except Exception as e:
        print("Error listing voices:", e)

if __name__ == '__main__':
    asyncio.run(main())
