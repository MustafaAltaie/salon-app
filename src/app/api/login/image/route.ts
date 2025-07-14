import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '../../../../../lib/cloudinary';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('image') as File;

  if (!file) {
    console.log('❌ No file found in request');
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'salonApp/logins',
          public_id: file.name.split('.').slice(0, -1).join(''),
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary error:', error);
            return reject(error);
          }
          resolve(result);
        }
      );

      stream.end(buffer);
    });

    console.log('✅ Upload success:', result);
    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error('❌ Upload failed:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
